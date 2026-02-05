import { useState, useRef } from 'react'
import type { BrandData, Story, NewsletterFeatures, ImageSettings, LogoSettings, ModuleKey, TextSettings } from '@/pages/Demo'
import { colorThemes, layouts } from '@/pages/Demo'

interface NewsletterPreviewProps {
  brandData: BrandData | null
  features: NewsletterFeatures
  theme: typeof colorThemes[0]
  layout: typeof layouts[0]
  stories: Story[]
  isMobile: boolean
  isLoading: boolean
  imageSettings: ImageSettings
  onImageSettingsChange: (settings: ImageSettings) => void
  logoSettings: LogoSettings
  onLogoSettingsChange: (settings: LogoSettings) => void
  moduleOrder: ModuleKey[]
  textSettings: TextSettings
  headerColor: string
  onHeaderColorChange: (color: string) => void
}

// Helper to truncate text to N sentences (5+ means full/no truncation)
function truncateBySentences(text: string, sentenceCount: number): string {
  // 5+ means show full text
  if (sentenceCount >= 5) return text
  // Split by sentence-ending punctuation followed by space or end
  const sentences = text.match(/[^.!?]*[.!?]+/g) || [text]
  const result = sentences.slice(0, sentenceCount).join(' ').trim()
  // If we truncated, don't add ellipsis since sentences end naturally
  return result || text.slice(0, 150) + '...'
}

// Helper to strip HTML tags and decode common entities
function stripHtml(html: string | null | undefined): string {
  if (!html) return ''
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ') // Collapse whitespace
    .trim()
}

export function NewsletterPreview({ 
  brandData, 
  features, 
  theme, 
  layout,
  stories, 
  isMobile,
  isLoading,
  imageSettings,
  onImageSettingsChange,
  logoSettings,
  onLogoSettingsChange,
  moduleOrder,
  textSettings,
  headerColor,
  onHeaderColorChange
}: NewsletterPreviewProps) {
  const [imageHovered, setImageHovered] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)
  const [headerHovered, setHeaderHovered] = useState(false)
  const [colorPickerLocked, setColorPickerLocked] = useState(false)
  const headerHoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const colorPickerLockTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  
  const handleHeaderMouseEnter = () => {
    if (headerHoverTimeout.current) {
      clearTimeout(headerHoverTimeout.current)
      headerHoverTimeout.current = null
    }
    setHeaderHovered(true)
  }
  
  const handleHeaderMouseLeave = () => {
    // Don't hide if color picker is locked (user is actively using it)
    if (colorPickerLocked) return
    
    // Small delay for edge cases
    headerHoverTimeout.current = setTimeout(() => {
      setHeaderHovered(false)
    }, 150)
  }
  
  const handleColorPickerClick = () => {
    // Lock the picker open when clicked
    setColorPickerLocked(true)
    // Clear any existing lock timeout
    if (colorPickerLockTimeout.current) {
      clearTimeout(colorPickerLockTimeout.current)
    }
    // Auto-unlock after 10 seconds (safety net)
    colorPickerLockTimeout.current = setTimeout(() => {
      setColorPickerLocked(false)
    }, 10000)
  }
  
  const handleColorChange = (newColor: string) => {
    onHeaderColorChange(newColor)
    // Keep locked while actively changing colors
    if (colorPickerLockTimeout.current) {
      clearTimeout(colorPickerLockTimeout.current)
    }
    colorPickerLockTimeout.current = setTimeout(() => {
      setColorPickerLocked(false)
    }, 10000)
  }
  const isDark = theme.id === 'modern' || theme.id === 'corporate'
  const isVibrant = theme.id === 'vibrant' || theme.id === 'creative'
  const borderClass = isDark || isVibrant ? 'border-white/10' : 'border-gray-200'

  // Loading state
  if (isLoading) {
    return (
      <div className={`${theme.bg} min-h-[600px] flex items-center justify-center`}>
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 mx-auto mb-4 text-purple-600" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className={`${theme.muted}`}>Analyzing your brand...</p>
        </div>
      </div>
    )
  }

  // Empty state
  if (!brandData) {
    return (
      <div className="bg-gray-50 min-h-[600px] flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Enter your website URL</h3>
          <p className="text-gray-500 text-sm max-w-xs">
            We'll analyze your site and create a beautiful newsletter preview using your brand assets.
          </p>
        </div>
      </div>
    )
  }

  // Filter out nav-like items from content
  const navPatterns = /^(home|about|contact|services|team|blog|news|menu|login|sign|cart|search|faq|help|support|privacy|terms|cookie)/i
  
  const filteredHeadlines = (brandData.headlines || [])
    .filter(h => !navPatterns.test(h.trim()) && h.length > 15)
    .slice(0, 5)
  
  const filteredParagraphs = (brandData.paragraphs || [])
    .filter(p => p.length > 40 && !navPatterns.test(p.trim()))
    .slice(0, 3)
  
  const filteredListItems = (brandData.listItems || [])
    .filter(li => !navPatterns.test(li.trim()) && li.length > 20)
    .slice(0, 5)

  const socialLinksData = brandData.socialLinks || []
  const featuredImage = brandData.featuredImage
  const ctaText = brandData.ctaTexts?.[0] || 'Learn More →'
  const brandDescription = brandData.scrapedDescription || brandData.description

  // Build headlines display - use selected story titles + brand description
  // Each headline has title and optional URL for linking
  const sourceUrl = brandData.url1 || ''
  const storyHeadlineData = stories.slice(0, 3).map(s => ({ title: s.title, url: s.readMoreUrl || sourceUrl }))
  const displayHeadlineData = storyHeadlineData.length > 0 
    ? storyHeadlineData
    : filteredHeadlines.length > 0 
      ? filteredHeadlines.slice(0, 3).map(h => ({ title: h, url: sourceUrl }))
      : brandDescription 
        ? [{ title: `${brandDescription.slice(0, 80)}${brandDescription.length > 80 ? '...' : ''}`, url: sourceUrl }]
        : [
            { title: `Latest ${brandData.industry || 'industry'} insights and updates`, url: sourceUrl },
            { title: `What's new at ${brandData.name || 'our company'}`, url: sourceUrl },
          ]

  // Build key insight content - ensure 3+ sentences
  const keyInsightFallback = `${brandData.name || 'Your brand'} provides expert insights on ${brandData.industry?.toLowerCase() || 'your industry'}. Our team delivers actionable strategies tailored to your needs. Discover what makes us different and how we can help you succeed.`
  const keyInsightSource = brandDescription || filteredParagraphs[0] || brandData.contentPreview || ''
  // Combine sources to ensure 3+ sentences
  const keyInsightText = (() => {
    const sourceSentences = keyInsightSource.match(/[^.!?]*[.!?]+/g) || []
    const fallbackSentences = keyInsightFallback.match(/[^.!?]*[.!?]+/g) || []
    const combined = [...sourceSentences, ...fallbackSentences]
    return combined.slice(0, 5).join(' ').trim() // Keep up to 5 sentences for "full" option
  })()

  // Build action steps
  const actionSteps = filteredListItems.length >= 3 
    ? filteredListItems.slice(0, 3)
    : [
        `Schedule a consultation with ${brandData.name || 'our team'}`,
        `Review your ${brandData.industry?.toLowerCase() || 'business'} strategy`,
        'Implement recommendations for better results'
      ]

  const logoSizeClass = logoSettings.size === 'small' ? 'h-8 max-w-[80px]' :
                        logoSettings.size === 'large' ? 'h-14 max-w-[160px]' : 'h-10 max-w-[120px]'
  
  const avatarSizeClass = logoSettings.size === 'small' ? 'w-8 h-8 text-sm' :
                          logoSettings.size === 'large' ? 'w-14 h-14 text-xl' : 'w-10 h-10 text-lg'

  const selectedStory = stories[0]

  return (
    <div className={`${theme.bg}`}>
      {/* Header - with hover/tap color picker */}
      <div 
        className={`p-4 border-b ${borderClass} relative transition-colors`}
        style={{ backgroundColor: headerColor }}
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
        onClick={isMobile ? () => setHeaderHovered(prev => !prev) : undefined}
      >
        {/* Header color picker - visible on hover/tap OR when locked */}
        {(headerHovered || colorPickerLocked) && (
          <div className="absolute top-2 right-2 z-50" onClick={(e) => e.stopPropagation()}>
            <label 
              className="relative cursor-pointer group flex items-center gap-2 bg-black/70 hover:bg-black/90 text-white px-4 py-2.5 rounded-lg shadow-xl transition-all border border-white/20"
              onClick={handleColorPickerClick}
            >
              <input
                type="color"
                value={headerColor}
                onChange={(e) => handleColorChange(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div 
                className="w-6 h-6 rounded border-2 border-white shadow-sm"
                style={{ backgroundColor: headerColor }}
              />
              <span className="text-sm font-medium">Change Color</span>
            </label>
          </div>
        )}
        <div className={`flex items-center ${isMobile ? 'flex-col gap-2 text-center' : 'justify-between'}`}>
          <div className={`flex items-center gap-3 ${isMobile ? 'flex-col' : ''}`}>
            {/* Logo with hover editor */}
            <div
              className="relative"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              {brandData.logo && brandData.logo.length > 5 ? (
                <img 
                  src={brandData.logo} 
                  alt={brandData.name} 
                  className={`${logoSizeClass} w-auto object-contain ${logoSettings.rounded ? 'rounded-lg' : ''}`}
                  style={{ opacity: logoSettings.opacity / 100 }}
                  onError={(e) => e.currentTarget.style.display = 'none'} 
                />
              ) : (
                <div 
                  className={`${avatarSizeClass} flex items-center justify-center font-bold ${
                    logoSettings.rounded ? 'rounded-full' : 'rounded-lg'
                  } ${isDark || isVibrant ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-600'}`}
                  style={{ opacity: logoSettings.opacity / 100 }}
                >
                  {(brandData.name || 'B').charAt(0)}
                </div>
              )}
              
              {/* Logo Editor Overlay - positioned to stay connected to trigger */}
              {logoHovered && !isMobile && (
                <div className="absolute top-0 left-0 z-50 pt-12">
                  {/* Invisible bridge to keep hover connected */}
                  <div className="absolute top-0 left-0 w-full h-12" />
                  <div className="bg-white rounded-lg shadow-xl p-3 space-y-3 min-w-[180px] border">
                    <div className="text-xs font-semibold text-gray-700 border-b pb-1">Logo Settings</div>
                    
                    {/* Size */}
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase tracking-wide">Size</label>
                      <div className="flex gap-1 mt-1">
                        {(['small', 'medium', 'large'] as const).map(size => (
                          <button
                            key={size}
                            onClick={() => onLogoSettingsChange({ ...logoSettings, size })}
                            className={`px-2 py-1 text-xs rounded ${
                              logoSettings.size === size
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {size.charAt(0).toUpperCase() + size.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Opacity */}
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase tracking-wide">
                        Opacity: {logoSettings.opacity}%
                      </label>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={logoSettings.opacity}
                        onChange={(e) => onLogoSettingsChange({ ...logoSettings, opacity: Number(e.target.value) })}
                        className="w-full h-1.5 mt-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                      />
                    </div>
                    
                    {/* Rounded */}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={logoSettings.rounded}
                        onChange={(e) => onLogoSettingsChange({ ...logoSettings, rounded: e.target.checked })}
                        className="w-3.5 h-3.5 accent-purple-600"
                      />
                      <span className="text-xs text-gray-600">Rounded</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
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

      {/* Content Area - modules rendered in order */}
      {/* Layout styles: single=stacked, magazine=2col for stories, cards=grid */}
      <div className={`p-4 ${isMobile ? 'text-sm' : ''} ${
        layout.id === 'cards' && !isMobile ? 'grid grid-cols-2 gap-4' : 'space-y-4'
      }`}>
        {moduleOrder.map((moduleKey) => {
          if (!features[moduleKey]) return null
          
          switch (moduleKey) {
            case 'sponsor':
              return (
                <div key={moduleKey} className={`px-4 py-2 border rounded-lg ${borderClass} text-center ${
                  layout.id === 'cards' && !isMobile ? 'col-span-2' : ''
                }`}>
                  <span className={`text-xs ${theme.muted}`}>Presented by </span>
                  <span className={`text-xs font-semibold ${theme.accent}`}>Sponsor Name</span>
                </div>
              )
            
            case 'headlines':
              // textSettings.headlines is now 1-3 (number of headlines to show)
              const headlineCount = Math.min(textSettings.headlines, displayHeadlineData.length)
              return (
                <div key={moduleKey} className={`${theme.cardBg} rounded-lg p-4`}>
                  <h3 className={`font-semibold ${isMobile ? 'text-sm' : 'text-sm'} mb-2 ${theme.text}`}>
                    📰 {brandData.industry || 'Industry'} Headlines
                  </h3>
                  <ul className={`${isMobile ? 'text-xs' : 'text-sm'} space-y-1 ${theme.muted}`}>
                    {displayHeadlineData.slice(0, headlineCount).map((headline, i) => (
                      <li key={i}>
                        <a 
                          href={headline.url || '#'} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >• {headline.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            
            case 'compellingStory':
              if (!selectedStory) return null
              return (
                <div key={moduleKey} className={`${theme.cardBg} rounded-lg ${
                  layout.id === 'cards' && !isMobile ? 'col-span-2' : ''
                }`}>
                  {featuredImage && (
                    <div 
                      className="relative"
                      onMouseEnter={() => setImageHovered(true)}
                      onMouseLeave={() => setImageHovered(false)}
                    >
                      <img 
                        src={featuredImage} 
                        alt={selectedStory.title}
                        className={`w-full object-cover transition-all ${
                          imageSettings.size === 'small' ? 'h-28' : 
                          imageSettings.size === 'large' ? 'h-56' : 'h-40'
                        } ${
                          imageSettings.position === 'top' ? 'object-top' :
                          imageSettings.position === 'bottom' ? 'object-bottom' : 'object-center'
                        } ${imageSettings.rounded ? 'rounded-lg m-2 w-[calc(100%-1rem)]' : 'rounded-t-lg'}`}
                        style={{ opacity: imageSettings.opacity / 100 }}
                        onError={(e) => e.currentTarget.style.display = 'none'}
                      />
                      {/* Edit button that triggers popover */}
                      {!isMobile && (
                        <button 
                          className={`absolute top-2 right-2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-lg transition-opacity ${
                            imageHovered ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                      )}
                      {/* Image settings popover - positioned below image */}
                      {imageHovered && !isMobile && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50">
                          <div className="bg-white rounded-lg shadow-xl p-3 space-y-3 min-w-[220px] border">
                            <div className="text-xs font-semibold text-gray-700 border-b pb-1">Image Settings</div>
                            <div>
                              <label className="text-[10px] text-gray-500 uppercase tracking-wide">Position</label>
                              <div className="flex gap-1 mt-1">
                                {(['top', 'center', 'bottom'] as const).map(pos => (
                                  <button key={pos} onClick={() => onImageSettingsChange({ ...imageSettings, position: pos })}
                                    className={`px-2 py-1 text-xs rounded ${imageSettings.position === pos ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                    {pos.charAt(0).toUpperCase() + pos.slice(1)}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="text-[10px] text-gray-500 uppercase tracking-wide">Size</label>
                              <div className="flex gap-1 mt-1">
                                {(['small', 'medium', 'large'] as const).map(size => (
                                  <button key={size} onClick={() => onImageSettingsChange({ ...imageSettings, size })}
                                    className={`px-2 py-1 text-xs rounded ${imageSettings.size === size ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                    {size.charAt(0).toUpperCase() + size.slice(1)}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="text-[10px] text-gray-500 uppercase tracking-wide">Opacity: {imageSettings.opacity}%</label>
                              <input type="range" min="20" max="100" value={imageSettings.opacity}
                                onChange={(e) => onImageSettingsChange({ ...imageSettings, opacity: Number(e.target.value) })}
                                className="w-full h-1.5 mt-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
                            </div>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" checked={imageSettings.rounded}
                                onChange={(e) => onImageSettingsChange({ ...imageSettings, rounded: e.target.checked })}
                                className="w-3.5 h-3.5 accent-purple-600" />
                              <span className="text-xs text-gray-600">Rounded corners</span>
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className={`font-semibold mb-2 ${theme.text} ${isMobile ? 'text-sm' : ''}`}>{selectedStory.title}</h3>
                    <p className={`${isMobile ? 'text-xs' : 'text-sm'} ${theme.muted}`}>
                      {truncateBySentences(
                        selectedStory.introText || brandDescription || '',
                        textSettings.compellingStory
                      )}
                    </p>
                    <a 
                      href={selectedStory.readMoreUrl || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium mt-2 inline-block ${theme.accent} hover:underline`}
                    >Read more →</a>
                  </div>
                </div>
              )
            
            case 'keyInsight':
              return (
                <div key={moduleKey} className={`${theme.cardBg} rounded-lg p-4 ${isMobile ? '' : 'flex gap-4'}`}>
                  {brandData.images?.[0] && !isMobile && (
                    <img src={brandData.images[0]} alt="Insight" className="w-20 h-20 rounded object-cover object-top flex-shrink-0"
                      onError={(e) => e.currentTarget.style.display = 'none'} />
                  )}
                  {!brandData.images?.[0] && !isMobile && (
                    <div className={`w-20 h-20 rounded flex-shrink-0 ${isDark || isVibrant ? 'bg-white/10' : 'bg-gray-200'}`} />
                  )}
                  <div>
                    <h3 className={`font-semibold ${isMobile ? 'text-sm' : 'text-sm'} mb-1 ${theme.text}`}>💡 Key Insight</h3>
                    <p className={`${isMobile ? 'text-xs' : 'text-sm'} ${theme.muted}`}>
                      {truncateBySentences(keyInsightText, textSettings.keyInsight)}
                    </p>
                  </div>
                </div>
              )
            
            case 'actionSteps':
              // textSettings.actionSteps is now 1-3 (number of steps to show)
              const stepCount = Math.min(textSettings.actionSteps, actionSteps.length)
              return (
                <div key={moduleKey} className={`${theme.cardBg} rounded-lg p-4`}>
                  <h3 className={`font-semibold ${isMobile ? 'text-sm' : 'text-sm'} mb-2 ${theme.text}`}>✅ Put It Into Action</h3>
                  <ol className={`${isMobile ? 'text-xs' : 'text-sm'} space-y-1 ${theme.muted} list-decimal list-inside`}>
                    {actionSteps.slice(0, stepCount).map((step, i) => <li key={i}>{step}</li>)}
                  </ol>
                </div>
              )
            
            case 'ctaButton':
              return (
                <div key={moduleKey} className={`text-center py-2 ${
                  layout.id === 'cards' && !isMobile ? 'col-span-2' : ''
                }`}>
                  <button className={`${isMobile ? 'px-4 py-2 text-sm' : 'px-6 py-2'} rounded-lg font-medium ${
                    isDark || isVibrant ? 'bg-white/20 text-white' : 'bg-purple-600 text-white'}`}>
                    {ctaText}
                  </button>
                </div>
              )
            
            case 'authorProfile':
              return (
                <div key={moduleKey} className={`${theme.cardBg} rounded-lg p-4 flex items-center gap-3 ${
                  layout.id === 'cards' && !isMobile ? 'col-span-2' : ''
                }`}>
                  <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full ${
                    isDark || isVibrant ? 'bg-white/20' : 'bg-gray-300'} flex items-center justify-center`}>
                    <span className="text-lg">👤</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isMobile ? 'text-xs' : 'text-sm'} ${theme.text}`}>Your Name</h4>
                    <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} ${theme.muted}`}>
                      {brandData.name ? `${brandData.name} Team` : 'Founder & CEO'}
                    </p>
                  </div>
                </div>
              )
            
            case 'feedback':
              return (
                <div key={moduleKey} className={`text-center py-3 border-t ${borderClass} ${
                  layout.id === 'cards' && !isMobile ? 'col-span-2' : ''
                }`}>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} ${theme.muted} mb-2`}>Was this helpful?</p>
                  <div className="flex justify-center gap-4">
                    <button className={`${isMobile ? 'text-xl' : 'text-2xl'} hover:scale-110 transition-transform`}>👍</button>
                    <button className={`${isMobile ? 'text-xl' : 'text-2xl'} hover:scale-110 transition-transform`}>👎</button>
                  </div>
                </div>
              )
            
            case 'additionalStories':
              // Show additional selected stories (excluding the first one used in Featured Story)
              const additionalCount = Math.min(textSettings.additionalStories, stories.length - 1)
              const additionalStories = stories.slice(1, 1 + additionalCount)
              if (additionalStories.length === 0) return null
              // Layout-aware: cards=grid, magazine=2col, single=stacked
              const storiesLayoutClass = layout.id === 'cards' && !isMobile 
                ? 'col-span-2 grid grid-cols-2 gap-3'
                : layout.id === 'magazine' && !isMobile && additionalStories.length > 1
                  ? 'grid grid-cols-2 gap-3'
                  : 'space-y-3'
              return (
                <div key={moduleKey} className={storiesLayoutClass}>
                  {additionalStories.map((story) => (
                    <div key={story.id} className={`${theme.cardBg} rounded-lg p-3`}>
                      <h4 className={`font-medium ${isMobile ? 'text-xs' : 'text-sm'} ${theme.text}`}>{story.title}</h4>
                      <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} mt-1 ${theme.muted}`}>
                        {truncateBySentences(story.introText, textSettings.compellingStory)}
                      </p>
                      <a 
                        href={story.readMoreUrl || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-medium mt-1 inline-block ${theme.accent} hover:underline`}
                      >Read more →</a>
                    </div>
                  ))}
                </div>
              )
            
            case 'socialLinks':
              return null // Rendered in footer
            
            default:
              return null
          }
        })}
      </div>

      {/* Footer */}
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
                  className={`${isMobile ? 'w-7 h-7 text-[10px]' : 'w-8 h-8 text-xs'} rounded-full ${
                    isDark || isVibrant ? 'bg-white/20' : 'bg-gray-200'
                  } flex items-center justify-center hover:opacity-80 transition-opacity`}
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
                <span className={`${isMobile ? 'w-7 h-7 text-[10px]' : 'w-8 h-8 text-xs'} rounded-full ${
                  isDark || isVibrant ? 'bg-white/20' : 'bg-gray-200'
                } flex items-center justify-center`}>𝕏</span>
                <span className={`${isMobile ? 'w-7 h-7 text-[10px]' : 'w-8 h-8 text-xs'} rounded-full ${
                  isDark || isVibrant ? 'bg-white/20' : 'bg-gray-200'
                } flex items-center justify-center`}>in</span>
                <span className={`${isMobile ? 'w-7 h-7 text-[10px]' : 'w-8 h-8 text-xs'} rounded-full ${
                  isDark || isVibrant ? 'bg-white/20' : 'bg-gray-200'
                } flex items-center justify-center`}>📘</span>
              </>
            )}
          </div>
        )}
        
        {/* Contact info */}
        <div className={`${isMobile ? 'text-[10px]' : 'text-xs'} ${theme.muted} space-y-1`}>
          <p>{stripHtml(brandData.scrapedAddress) || brandData.address || `${brandData.name || 'Company'} HQ`}</p>
          
          {(brandData.scrapedPhone || brandData.scrapedEmail) && (
            <p>
              {brandData.scrapedPhone && <span>{stripHtml(brandData.scrapedPhone)}</span>}
              {brandData.scrapedPhone && brandData.scrapedEmail && <span> • </span>}
              {brandData.scrapedEmail && (
                <a href={`mailto:${stripHtml(brandData.scrapedEmail)}`} className={theme.accent}>
                  {stripHtml(brandData.scrapedEmail)}
                </a>
              )}
            </p>
          )}
          
          <p className="mt-2">
            {stripHtml(brandData.copyright) || `© ${new Date().getFullYear()} ${brandData.name || 'Company'}. All rights reserved.`}
          </p>
          
          <p className="mt-1">
            <span className={`${theme.accent} cursor-pointer`}>Unsubscribe</span>
            <span> • </span>
            <span className={`${theme.accent} cursor-pointer`}>View in browser</span>
          </p>
        </div>
      </div>
    </div>
  )
}
