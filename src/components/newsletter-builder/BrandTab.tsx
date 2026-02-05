import { useState } from 'react'
import type { BrandData } from '@/pages/Demo'

interface BrandTabProps {
  onSubmit: (data: BrandData) => void
  initialData: BrandData | null
}

const API_BASE = import.meta.env.PROD 
  ? 'https://stellabot.app' 
  : 'https://stellabot.app'; // Always use prod for demo

export function BrandTab({ onSubmit, initialData }: BrandTabProps) {
  const [formData, setFormData] = useState<BrandData>(
    initialData || {
      name: '',
      logo: '',
      industry: '',
      url1: '',
      url2: '',
      address: '',
      phone: '',
      description: '',
    }
  )
  const [isLoading, setIsLoading] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Need at least URL or description
    if (!formData.url1 && !formData.description) {
      setError('Please enter a URL or expand options to add a description')
      return
    }
    
    setIsLoading(true)
    setError(null)
    
    let enrichedData: BrandData = { ...formData }
    
    // If URL provided, scrape it
    if (formData.url1) {
      try {
        const response = await fetch(`${API_BASE}/api/scrape`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: formData.url1 }),
        })
        
        if (!response.ok) {
          const err = await response.json()
          throw new Error(err.error || 'Failed to analyze URL')
        }
        
        const { data } = await response.json()
        
        // Merge scraped data with form data (form data takes precedence)
        enrichedData = {
          ...formData,
          name: formData.name || data.brandName,
          logo: formData.logo || data.logo,
          description: formData.description || data.description,
          industry: formData.industry || data.industry,
          colors: data.colors,
          scrapedTitle: data.title,
          scrapedDescription: data.description,
          topics: data.topics,
          tone: data.tone,
          contentPreview: data.content?.[0],
          // Rich content for modules
          headlines: data.headlines || [],
          paragraphs: data.paragraphs || [],
          images: data.images || [],
          socialLinks: data.socialLinks || [],
          listItems: data.listItems || [],
          ctaTexts: data.ctaTexts || [],
          featuredImage: data.featuredImage,
          // Footer content
          scrapedAddress: data.address,
          scrapedPhone: data.phone,
          scrapedEmail: data.email,
          copyright: data.copyright,
        }
      } catch (err: any) {
        console.error('Scrape error:', err)
        const errorMsg = err.message || 'Failed to analyze URL.'
        const isBotProtection = errorMsg.includes('bot protection')
        setError(isBotProtection 
          ? 'This site has bot protection — please enter your details below instead.'
          : errorMsg + ' Please try again or enter details manually.')
        setIsLoading(false)
        setShowMore(true) // Show manual entry on error
        return
      }
    } else {
      // No URL, just use form data with defaults
      enrichedData = {
        ...formData,
        colors: ['#667eea', '#764ba2'],
        tone: 'Professional',
      }
    }
    
    setIsLoading(false)
    onSubmit(enrichedData)
  }

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Retail',
    'Real Estate',
    'Education',
    'Manufacturing',
    'Hospitality',
    'Legal',
    'Non-Profit',
    'Other',
  ]

  const canSubmit = formData.url1 || formData.description

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Let's build your newsletter</h2>
        <p className="text-gray-500 mt-1">Just drop your URL and we'll do the rest</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-xl mx-auto p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Primary: URL Input */}
      <div className="max-w-xl mx-auto">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Website URL
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <input
            type="url"
            name="url1"
            value={formData.url1}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="https://yourcompany.com"
            autoFocus
          />
        </div>
        <p className="text-sm text-gray-400 mt-2 text-center">
          We'll analyze your site to extract brand info, colors, and content ideas
        </p>
      </div>

      {/* Divider */}
      <div className="relative max-w-xl mx-auto">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-400">or</span>
        </div>
      </div>

      {/* Accordion: Manual Entry */}
      <div className="max-w-xl mx-auto">
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <span className="font-medium">
            {showMore ? 'Hide additional options' : "Don't have a URL? Enter details manually"}
          </span>
          <svg 
            className={`h-5 w-5 transition-transform ${showMore ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showMore && (
          <div className="mt-4 p-6 bg-gray-50 rounded-xl space-y-4">
            {/* Brand Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Acme Corp"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Industry
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select industry...</option>
                {industries.map(ind => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="Tell us about your business, what you do, and who your audience is..."
              />
            </div>

            {/* Logo URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Logo URL
              </label>
              <input
                type="url"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="https://example.com/logo.png"
              />
            </div>

            {/* Phone & Secondary URL */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Secondary URL
                </label>
                <input
                  type="url"
                  name="url2"
                  value={formData.url2}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://blog.example.com"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="123 Main St, City, State 12345"
              />
            </div>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center pt-6">
        <button
          type="submit"
          disabled={isLoading || !canSubmit}
          className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-medium rounded-xl hover:from-purple-700 hover:to-indigo-700 focus:ring-4 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
        >
          {isLoading ? (
            <span className="flex items-center gap-3">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Analyzing your brand...
            </span>
          ) : (
            'Build My Newsletter →'
          )}
        </button>
      </div>
      
      {!canSubmit && (
        <p className="text-center text-sm text-gray-400">
          Enter a URL or expand options to add a description
        </p>
      )}
    </form>
  )
}
