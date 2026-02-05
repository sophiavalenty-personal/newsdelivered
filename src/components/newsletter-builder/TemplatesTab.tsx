import { useState } from 'react'
import type { BrandData, Story } from '@/pages/Demo'
import type { NewsletterFeatures } from './FeaturesTab'

interface TemplatesTabProps {
  brandData: BrandData
  stories: Story[]
  features: NewsletterFeatures
  selectedTemplate: string | null
  onSelectTemplate: (templateId: string) => void
}

const colorThemes = [
  { id: 'classic', name: 'Classic', bg: 'bg-white', headerBg: 'bg-gray-100', text: 'text-gray-800', muted: 'text-gray-500', accent: 'text-blue-600', cardBg: 'bg-gray-50' },
  { id: 'modern', name: 'Modern', bg: 'bg-gradient-to-br from-slate-900 to-slate-800', headerBg: 'bg-slate-800', text: 'text-white', muted: 'text-gray-300', accent: 'text-purple-400', cardBg: 'bg-white/10' },
  { id: 'minimal', name: 'Minimal', bg: 'bg-gray-50', headerBg: 'bg-white', text: 'text-gray-800', muted: 'text-gray-400', accent: 'text-gray-600', cardBg: 'bg-white' },
  { id: 'vibrant', name: 'Vibrant', bg: 'bg-gradient-to-br from-purple-500 to-pink-500', headerBg: 'bg-purple-600', text: 'text-white', muted: 'text-white/80', accent: 'text-yellow-300', cardBg: 'bg-white/20' },
  { id: 'corporate', name: 'Corporate', bg: 'bg-blue-900', headerBg: 'bg-blue-950', text: 'text-white', muted: 'text-blue-200', accent: 'text-blue-300', cardBg: 'bg-white/10' },
  { id: 'creative', name: 'Creative', bg: 'bg-gradient-to-br from-amber-400 to-orange-500', headerBg: 'bg-amber-500', text: 'text-white', muted: 'text-white/80', accent: 'text-amber-900', cardBg: 'bg-white/30' },
]

const layouts = [
  { id: 'single', name: 'Single Column', description: 'Classic newsletter format', icon: '▐' },
  { id: 'magazine', name: 'Magazine', description: 'Featured story with sidebar', icon: '▐▌' },
  { id: 'cards', name: 'Card Grid', description: 'Modern card-based layout', icon: '▦' },
]

type PreviewSize = 'desktop' | 'mobile'

export function TemplatesTab({ brandData, stories, features, selectedTemplate: _selectedTemplate, onSelectTemplate }: TemplatesTabProps) {
  void _selectedTemplate
  const [selectedTheme, setSelectedTheme] = useState(colorThemes[0])
  const [selectedLayout, setSelectedLayout] = useState(layouts[0])
  const [previewSize, setPreviewSize] = useState<PreviewSize>('desktop')

  const handleThemeSelect = (theme: typeof colorThemes[0]) => {
    setSelectedTheme(theme)
    onSelectTemplate(`${theme.id}-${selectedLayout.id}`)
  }

  const handleLayoutSelect = (layout: typeof layouts[0]) => {
    setSelectedLayout(layout)
    onSelectTemplate(`${selectedTheme.id}-${layout.id}`)
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Design Your Newsletter</h2>
        <p className="text-gray-500 mt-1">Choose a color theme and layout style</p>
      </div>

      {/* Color Theme Selection */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-3">1. Choose Color Theme</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {colorThemes.map((theme) => (
            <button key={theme.id} onClick={() => handleThemeSelect(theme)}
              className={`relative rounded-lg overflow-hidden border-2 transition-all ${selectedTheme.id === theme.id ? 'border-purple-500 ring-2 ring-purple-500/30 scale-105' : 'border-gray-200 hover:border-gray-300'}`}>
              <div className={`h-16 ${theme.bg}`}><div className={`h-4 ${theme.headerBg}`} /></div>
              <div className="p-2 bg-white text-center"><span className="text-xs font-medium text-gray-700">{theme.name}</span></div>
            </button>
          ))}
        </div>
      </div>

      {/* Layout Selection */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-3">2. Choose Layout</h3>
        <div className="grid grid-cols-3 gap-4">
          {layouts.map((layout) => (
            <button key={layout.id} onClick={() => handleLayoutSelect(layout)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${selectedLayout.id === layout.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-gray-300'}`}>
              <div className="text-3xl mb-2">{layout.icon}</div>
              <h4 className="font-medium text-gray-800">{layout.name}</h4>
              <p className="text-xs text-gray-500">{layout.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Preview with Device Toggle */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-700">Preview</h3>
          
          {/* Desktop/Mobile Toggle */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setPreviewSize('desktop')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                previewSize === 'desktop' 
                  ? 'bg-white text-purple-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Desktop
            </button>
            <button
              onClick={() => setPreviewSize('mobile')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                previewSize === 'mobile' 
                  ? 'bg-white text-purple-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Mobile
            </button>
          </div>
        </div>

        {/* Preview Container */}
        <div className={`flex justify-center ${previewSize === 'mobile' ? 'py-4' : ''}`}>
          <div 
            className={`border border-gray-200 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
              previewSize === 'mobile' 
                ? 'w-[375px] rounded-[2rem] border-[8px] border-gray-800' 
                : 'w-full'
            }`}
          >
            {/* Mobile notch */}
            {previewSize === 'mobile' && (
              <div className="bg-gray-800 h-6 flex justify-center items-end pb-1">
                <div className="w-20 h-4 bg-black rounded-full" />
              </div>
            )}
            <div className={`overflow-y-auto ${previewSize === 'mobile' ? 'max-h-[600px]' : 'max-h-[700px]'}`}>
              <NewsletterPreview 
                theme={selectedTheme} 
                layout={selectedLayout} 
                brandData={brandData} 
                stories={stories} 
                features={features}
                isMobile={previewSize === 'mobile'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center pt-4">
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:ring-4 focus:ring-purple-500/50 transition-all">
          🚀 Get Started with NewsDelivered
        </button>
      </div>
    </div>
  )
}

function NewsletterPreview({ theme, layout, brandData, stories, features, isMobile }: {
  theme: typeof colorThemes[0]
  layout: typeof layouts[0]
  brandData: BrandData
  stories: Story[]
  features: NewsletterFeatures
  isMobile: boolean
}) {
  const isDark = theme.id === 'modern' || theme.id === 'corporate'
  const isVibrant = theme.id === 'vibrant' || theme.id === 'creative'
  const borderClass = isDark || isVibrant ? 'border-white/10' : 'border-gray-200'

  // Use real scraped content or fallbacks
  const socialLinksData = brandData.socialLinks || []
  const featuredImage = brandData.featuredImage
  const ctaText = brandData.ctaTexts?.[0] || 'Learn More →'
  const brandDescription = brandData.scrapedDescription || brandData.description
  
  // Filter out nav-like items from content
  const navPatterns = /^(home|about|contact|services|team|blog|news|menu|login|sign|cart|search|faq|help|support|privacy|terms|cookie)/i
  
  // Filter headlines - skip nav-like and very short ones
  const filteredHeadlines = (brandData.headlines || [])
    .filter(h => !navPatterns.test(h.trim()) && h.length > 15)
    .slice(0, 5)
  
  // Filter paragraphs - prefer longer, descriptive ones
  const filteredParagraphs = (brandData.paragraphs || [])
    .filter(p => p.length > 40 && !navPatterns.test(p.trim()))
    .slice(0, 3)
  
  // Filter list items - skip nav-like items
  const filteredListItems = (brandData.listItems || [])
    .filter(li => !navPatterns.test(li.trim()) && li.length > 20)
    .slice(0, 5)

  // Build headlines display - use brand description if no good headlines
  const displayHeadlines = filteredHeadlines.length > 0 
    ? filteredHeadlines.slice(0, 3).map(h => `• ${h}`)
    : brandDescription 
      ? [`• ${brandDescription.slice(0, 80)}${brandDescription.length > 80 ? '...' : ''}`]
      : [
          `• Latest ${brandData.industry || 'industry'} insights and updates`,
          `• What's new at ${brandData.name || 'our company'}`,
          '• Industry trends and best practices'
        ]

  // Build key insight content - use description or content preview
  const keyInsightText = brandDescription && brandDescription.length > 50
    ? brandDescription
    : filteredParagraphs[0] || brandData.contentPreview?.slice(0, 200) ||
      `${brandData.name || 'Your brand'} provides expert insights and analysis on the latest developments in ${brandData.industry?.toLowerCase() || 'your industry'}.`

  // Build action steps - generate relevant ones based on industry/services
  const actionSteps = filteredListItems.length >= 3 
    ? filteredListItems.slice(0, 3)
    : [
        `Schedule a consultation with ${brandData.name || 'our team'}`,
        `Review your ${brandData.industry?.toLowerCase() || 'business'} strategy`,
        'Implement recommendations for better results'
      ]

  const LogoOrAvatar = () => (
    brandData.logo && brandData.logo.length > 5 ? (
      <img src={brandData.logo} alt={brandData.name} className="h-10 w-auto max-w-[120px] object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
    ) : (
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${isDark || isVibrant ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-600'}`}>
        {(brandData.name || 'B').charAt(0)}
      </div>
    )
  )

  return (
    <div className={`${theme.bg}`}>
      {/* Header */}
      <div className={`${theme.headerBg} p-4 border-b ${borderClass}`}>
        <div className={`flex items-center ${isMobile ? 'flex-col gap-2 text-center' : 'justify-between'}`}>
          <div className={`flex items-center gap-3 ${isMobile ? 'flex-col' : ''}`}>
            <LogoOrAvatar />
            <div className={isMobile ? 'text-center' : ''}>
              <h1 className={`font-bold ${theme.text}`}>{brandData.name || 'Your Brand'}</h1>
              <p className={`text-sm ${theme.muted}`}>Monthly Newsletter</p>
            </div>
          </div>
          <div className={`text-sm ${theme.muted} ${isMobile ? 'mt-1' : ''}`}>
            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        </div>
      </div>

      {/* Sponsor Section */}
      {features.sponsor && (
        <div className={`px-4 py-2 border-b ${borderClass} text-center`}>
          <span className={`text-xs ${theme.muted}`}>Presented by </span>
          <span className={`text-xs font-semibold ${theme.accent}`}>Sponsor Name</span>
        </div>
      )}

      {/* Content Area */}
      <div className={`p-4 space-y-4 ${isMobile ? 'text-sm' : ''}`}>
        {/* Headlines - using real scraped content */}
        {features.headlines && (
          <div className={`${theme.cardBg} rounded-lg p-4`}>
            <h3 className={`font-semibold ${isMobile ? 'text-sm' : 'text-sm'} mb-2 ${theme.text}`}>📰 {brandData.industry || 'Industry'} Headlines</h3>
            <ul className={`${isMobile ? 'text-xs' : 'text-sm'} space-y-1 ${theme.muted}`}>
              {displayHeadlines.map((headline, i) => (
                <li key={i}>{headline}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Compelling Story - with featured image if available */}
        {features.compellingStory && stories[0] && (
          <div className={`${theme.cardBg} rounded-lg overflow-hidden`}>
            {featuredImage && (
              <img 
                src={featuredImage} 
                alt={stories[0].title}
                className="w-full h-40 object-cover"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
            )}
            <div className="p-4">
              <h3 className={`font-semibold mb-2 ${theme.text} ${isMobile ? 'text-sm' : ''}`}>{stories[0].title}</h3>
              <p className={`${isMobile ? 'text-xs' : 'text-sm'} ${theme.muted}`}>
                {brandDescription ? brandDescription.slice(0, 150) + '...' : stories[0].introText}
              </p>
              <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium mt-2 inline-block ${theme.accent}`}>Read more →</span>
            </div>
          </div>
        )}

        {/* Key Insight - using real paragraph content */}
        {features.keyInsight && (
          <div className={`${theme.cardBg} rounded-lg p-4 ${isMobile ? '' : 'flex gap-4'}`}>
            {brandData.images?.[0] && !isMobile && (
              <img 
                src={brandData.images[0]} 
                alt="Insight" 
                className="w-20 h-20 rounded object-cover flex-shrink-0"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
            )}
            {!brandData.images?.[0] && !isMobile && (
              <div className={`w-20 h-20 rounded flex-shrink-0 ${isDark || isVibrant ? 'bg-white/10' : 'bg-gray-200'}`} />
            )}
            <div>
              <h3 className={`font-semibold ${isMobile ? 'text-sm' : 'text-sm'} mb-1 ${theme.text}`}>💡 Key Insight</h3>
              <p className={`${isMobile ? 'text-xs' : 'text-sm'} ${theme.muted}`}>
                {keyInsightText.slice(0, isMobile ? 100 : 200)}{keyInsightText.length > (isMobile ? 100 : 200) ? '...' : ''}
              </p>
            </div>
          </div>
        )}

        {/* Additional Stories (layout dependent) */}
        {layout.id === 'cards' && stories.slice(1, 3).map((story) => (
          <div key={story.id} className={`${theme.cardBg} rounded-lg p-3`}>
            <h4 className={`font-medium ${isMobile ? 'text-xs' : 'text-sm'} ${theme.text}`}>{story.title}</h4>
            <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} mt-1 ${theme.muted} line-clamp-2`}>{story.introText}</p>
          </div>
        ))}

        {/* Action Steps - using real list items */}
        {features.actionSteps && (
          <div className={`${theme.cardBg} rounded-lg p-4`}>
            <h3 className={`font-semibold ${isMobile ? 'text-sm' : 'text-sm'} mb-2 ${theme.text}`}>✅ Put It Into Action</h3>
            <ol className={`${isMobile ? 'text-xs' : 'text-sm'} space-y-1 ${theme.muted} list-decimal list-inside`}>
              {actionSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {/* CTA Button - using real CTA text */}
        {features.ctaButton && (
          <div className="text-center py-2">
            <button className={`${isMobile ? 'px-4 py-2 text-sm' : 'px-6 py-2'} rounded-lg font-medium ${isDark || isVibrant ? 'bg-white/20 text-white' : 'bg-purple-600 text-white'}`}>
              {ctaText}
            </button>
          </div>
        )}

        {/* Author Profile */}
        {features.authorProfile && (
          <div className={`${theme.cardBg} rounded-lg p-4 flex items-center gap-3`}>
            <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full ${isDark || isVibrant ? 'bg-white/20' : 'bg-gray-300'} flex items-center justify-center`}>
              <span className="text-lg">👤</span>
            </div>
            <div>
              <h4 className={`font-semibold ${isMobile ? 'text-xs' : 'text-sm'} ${theme.text}`}>Your Name</h4>
              <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} ${theme.muted}`}>
                {brandData.name ? `${brandData.name} Team` : 'Founder & CEO'}
              </p>
            </div>
          </div>
        )}

        {/* Feedback */}
        {features.feedback && (
          <div className={`text-center py-3 border-t ${borderClass}`}>
            <p className={`${isMobile ? 'text-xs' : 'text-sm'} ${theme.muted} mb-2`}>Was this helpful?</p>
            <div className="flex justify-center gap-4">
              <button className={`${isMobile ? 'text-xl' : 'text-2xl'} hover:scale-110 transition-transform`}>👍</button>
              <button className={`${isMobile ? 'text-xl' : 'text-2xl'} hover:scale-110 transition-transform`}>👎</button>
            </div>
          </div>
        )}
      </div>

      {/* Footer - using real scraped content */}
      <div className={`p-4 border-t ${borderClass} text-center`}>
        {features.socialLinks && (
          <div className="flex justify-center gap-3 mb-3">
            {socialLinksData.length > 0 ? (
              socialLinksData.slice(0, 4).map((social, i) => (
                <a 
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isMobile ? 'w-7 h-7 text-[10px]' : 'w-8 h-8 text-xs'} rounded-full ${isDark || isVibrant ? 'bg-white/20' : 'bg-gray-200'} flex items-center justify-center hover:opacity-80 transition-opacity`}
                >
                  {social.platform === 'twitter' && '𝕏'}
                  {social.platform === 'linkedin' && 'in'}
                  {social.platform === 'facebook' && '📘'}
                  {social.platform === 'instagram' && '📷'}
                  {social.platform === 'youtube' && '▶️'}
                </a>
              ))
            ) : (
              <>
                <span className={`${isMobile ? 'w-7 h-7 text-[10px]' : 'w-8 h-8 text-xs'} rounded-full ${isDark || isVibrant ? 'bg-white/20' : 'bg-gray-200'} flex items-center justify-center`}>𝕏</span>
                <span className={`${isMobile ? 'w-7 h-7 text-[10px]' : 'w-8 h-8 text-xs'} rounded-full ${isDark || isVibrant ? 'bg-white/20' : 'bg-gray-200'} flex items-center justify-center`}>in</span>
                <span className={`${isMobile ? 'w-7 h-7 text-[10px]' : 'w-8 h-8 text-xs'} rounded-full ${isDark || isVibrant ? 'bg-white/20' : 'bg-gray-200'} flex items-center justify-center`}>📘</span>
              </>
            )}
          </div>
        )}
        
        {/* Contact info from scraped data */}
        <div className={`${isMobile ? 'text-[10px]' : 'text-xs'} ${theme.muted} space-y-1`}>
          {/* Address */}
          <p>{brandData.scrapedAddress || brandData.address || `${brandData.name || 'Company'} HQ`}</p>
          
          {/* Phone & Email */}
          {(brandData.scrapedPhone || brandData.scrapedEmail) && (
            <p>
              {brandData.scrapedPhone && <span>{brandData.scrapedPhone}</span>}
              {brandData.scrapedPhone && brandData.scrapedEmail && <span> • </span>}
              {brandData.scrapedEmail && (
                <a href={`mailto:${brandData.scrapedEmail}`} className={theme.accent}>
                  {brandData.scrapedEmail}
                </a>
              )}
            </p>
          )}
          
          {/* Copyright */}
          <p className="mt-2">
            {brandData.copyright || `© ${new Date().getFullYear()} ${brandData.name || 'Company'}. All rights reserved.`}
          </p>
          
          {/* Links */}
          <p className="mt-1">
            <span className={`${theme.accent} cursor-pointer`}>Unsubscribe</span>
            <span> • </span>
            <span className={`${theme.accent} cursor-pointer`}>View in browser</span>
            <span> • </span>
            <span className={`${theme.accent} cursor-pointer`}>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  )
}
