import { useState } from 'react'
import type { BrandData, Story } from '@/pages/Demo'

const API_BASE = import.meta.env.PROD 
  ? 'https://stellabot.app' 
  : 'https://stellabot.app'

interface UrlInputProps {
  onBrandLoaded: (data: BrandData, stories: Story[]) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  getConfig: () => any
  hasBrandData: boolean
}

export function UrlInput({ onBrandLoaded, isLoading, setIsLoading, getConfig, hasBrandData }: UrlInputProps) {
  const [url, setUrl] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [shareStatus, setShareStatus] = useState<'idle' | 'saving' | 'copied'>('idle')

  const handleShare = async () => {
    if (!hasBrandData) return
    
    setShareStatus('saving')
    try {
      const config = getConfig()
      const response = await fetch(`${API_BASE}/api/newsletter-share`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ config }),
      })
      
      if (!response.ok) throw new Error('Failed to save')
      
      const { id } = await response.json()
      const shareUrl = `${window.location.origin}${window.location.pathname}?v=${id}`
      
      await navigator.clipboard.writeText(shareUrl)
      setShareStatus('copied')
      setTimeout(() => setShareStatus('idle'), 2000)
    } catch (err) {
      console.error('Share error:', err)
      setShareStatus('idle')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`${API_BASE}/api/scrape`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })
      
      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.error || 'Failed to analyze URL')
      }
      
      const { data } = await response.json()
      
      // Build enriched brand data
      const brandData: BrandData = {
        name: data.brandName || '',
        logo: data.logo || '',
        description: data.description || '',
        industry: data.industry || 'General',
        url1: url,
        url2: '',
        address: '',
        phone: '',
        colors: data.colors,
        scrapedTitle: data.title,
        scrapedDescription: data.description,
        topics: data.topics,
        tone: data.tone,
        contentPreview: data.content?.[0],
        headlines: data.headlines || [],
        paragraphs: data.paragraphs || [],
        images: data.images || [],
        socialLinks: data.socialLinks || [],
        listItems: data.listItems || [],
        ctaTexts: data.ctaTexts || [],
        featuredImage: data.featuredImage,
        scrapedAddress: data.address,
        scrapedPhone: data.phone,
        scrapedEmail: data.email,
        copyright: data.copyright,
      }
      
      // Generate stories
      const stories = generateStories(brandData)
      
      onBrandLoaded(brandData, stories)
      
    } catch (err: any) {
      console.error('Scrape error:', err)
      setError(err.message || 'Failed to analyze URL')
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
      <div className="flex-1 relative">
        <input
          type="url"
          value={url}
          onChange={(e) => { setUrl(e.target.value); setError(null); }}
          placeholder="Enter your website URL..."
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          disabled={isLoading}
        />
        {error && (
          <div className="absolute top-full left-0 mt-1 text-red-200 text-sm">
            {error}
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading || !url.trim()}
        className="px-6 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Analyzing...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Analyze
          </>
        )}
      </button>
      
      {/* Share Button */}
      <button
        type="button"
        onClick={handleShare}
        disabled={!hasBrandData || shareStatus === 'saving'}
        className="px-4 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 border border-white/30"
      >
        {shareStatus === 'saving' ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Saving...
          </>
        ) : shareStatus === 'copied' ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </>
        )}
      </button>
      
      {/* Upgrade Button */}
      <a
        href="https://newsdelivered.com/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all flex items-center gap-2 shadow-lg"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Upgrade
      </a>
    </form>
  )
}

// Ensure we have at least minSentences by combining text sources
function ensureMinSentences(primary: string, fallback: string, minSentences: number = 3): string {
  const primarySentences = primary.match(/[^.!?]*[.!?]+/g) || []
  if (primarySentences.length >= minSentences) {
    return primarySentences.slice(0, minSentences).join(' ').trim()
  }
  // Need more sentences - combine with fallback
  const fallbackSentences = fallback.match(/[^.!?]*[.!?]+/g) || []
  const combined = [...primarySentences, ...fallbackSentences]
  return combined.slice(0, minSentences).join(' ').trim()
}

function generateStories(brandData: BrandData): Story[] {
  const stories: Story[] = []
  const industry = brandData.industry || 'General'
  const name = brandData.name || 'Your Brand'
  const tone = brandData.tone || 'Professional'
  const sourceUrl = brandData.url1 || '' // Original website URL for "Read more" links
  
  // Get scraped paragraphs for intro text (filter for meaningful content)
  const paragraphs = (brandData.paragraphs || [])
    .filter(p => p.length > 60 && p.length < 800)
    .slice(0, 6)
  
  // Filter out nav-like topics
  const navWords = ['home', 'about', 'contact', 'services', 'team', 'blog', 'news', 'menu', 'login', 'sign', 'cart', 'search', 'faq', 'help', 'support', 'newsletter', 'subscribe', 'review', 'appointment', 'appointments']
  const topics = (brandData.topics || []).filter(topic => {
    const lower = topic.toLowerCase().trim()
    return topic.length > 15 && !navWords.includes(lower) && !navWords.some(nw => lower === nw + 's')
  })
  
  // Add stories based on filtered topics with scraped intro text
  topics.forEach((topic, idx) => {
    if (idx < 2) {
      // Use a scraped paragraph for intro text - ensure 3+ sentences
      const introSource = paragraphs[idx] || brandData.scrapedDescription || ''
      const introFallback = `Explore the latest insights about ${topic.toLowerCase()}. ${name} brings you in-depth coverage tailored for ${industry.toLowerCase()} professionals. Stay informed with our expert analysis and recommendations.`
      
      stories.push({
        id: `topic-${idx}`,
        title: topic,
        introText: ensureMinSentences(introSource, introFallback, 3),
        readMoreUrl: sourceUrl,
        selected: idx === 0,
      })
    }
  })
  
  // Build intro text from scraped content - ensure at least 3 sentences
  const getIntroText = (idx: number, fallback: string): string => {
    const source = paragraphs[stories.length + idx] || brandData.scrapedDescription || ''
    // Ensure we always have 3 sentences by combining with fallback if needed
    return ensureMinSentences(source, fallback, 3)
  }
  
  // Add standard newsletter sections with scraped intro text
  const standardStories: Story[] = [
    {
      id: 'trends',
      title: `${industry} Trends to Watch`,
      introText: getIntroText(0, `Stay ahead of the curve with our analysis of the top trends shaping the ${industry.toLowerCase()} industry. We break down what matters most for professionals like you. Get actionable insights you can apply today.`),
      readMoreUrl: sourceUrl,
      selected: true,
    },
    {
      id: 'innovation',
      title: `How ${name} is Innovating`,
      introText: getIntroText(1, `Discover the latest innovations and initiatives driving ${name} forward. Our team is constantly pushing boundaries to deliver better results. Here's what's new and what it means for you.`),
      readMoreUrl: sourceUrl,
      selected: true,
    },
    {
      id: 'success',
      title: `Customer Success Story`,
      introText: getIntroText(2, `Learn how our partners are achieving remarkable results with ${name}'s solutions. Real stories from real customers who transformed their business. See what's possible when you work with the best.`),
      readMoreUrl: sourceUrl,
      selected: false,
    },
    {
      id: 'tips',
      title: `Expert Tips & Best Practices`,
      introText: getIntroText(3, `Our team shares insider tips to help you maximize your ROI. Proven strategies that deliver real results. Start implementing these best practices today.`),
      readMoreUrl: sourceUrl,
      selected: false,
    },
  ]
  
  // If we already have topic-based stories, only add standard ones as unselected
  const hasTopicStories = stories.length > 0
  for (const story of standardStories) {
    if (stories.length < 6) {
      if (hasTopicStories && stories.length >= 1) {
        story.selected = false
      }
      stories.push(story)
    }
  }
  
  // Ensure at least 4 stories are selected for complete preview
  const selectedCount = stories.filter(s => s.selected).length
  if (selectedCount < 4) {
    for (let i = 0; i < stories.length && stories.filter(s => s.selected).length < 4; i++) {
      if (!stories[i].selected) {
        stories[i].selected = true
      }
    }
  }
  
  // Tone-specific story
  if (tone === 'Casual & Friendly') {
    stories.push({
      id: 'fun',
      title: `Fun Facts & Behind the Scenes`,
      introText: `Get to know the team behind ${name}! We're more than just a business. Discover the people and passion that make it all happen.`,
      readMoreUrl: sourceUrl,
      selected: false,
    })
  }
  
  return stories
}
