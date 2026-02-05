import { useState, useEffect, useRef } from 'react'
import { EditorSidebar } from '@/components/newsletter-builder/EditorSidebar'
import { NewsletterPreview } from '@/components/newsletter-builder/NewsletterPreview'
import { UrlInput } from '@/components/newsletter-builder/UrlInput'

const STORAGE_KEY = 'newsdelivered_demo'

export interface BrandData {
  name: string
  logo: string
  industry: string
  url1: string
  url2: string
  address: string
  phone: string
  description: string
  // Enriched data from scraping API
  colors?: string[]
  tagline?: string
  socialLinks?: { platform: string; url: string }[]
  scrapedTitle?: string
  scrapedDescription?: string
  topics?: string[]
  tone?: string
  contentPreview?: string
  // Rich content for modules
  headlines?: string[]
  paragraphs?: string[]
  images?: string[]
  listItems?: string[]
  ctaTexts?: string[]
  featuredImage?: string | null
  // Footer content
  scrapedAddress?: string | null
  scrapedPhone?: string | null
  scrapedEmail?: string | null
  copyright?: string | null
}

export interface Story {
  id: string
  title: string
  introText: string
  readMoreUrl?: string
  selected: boolean
}

export interface NewsletterFeatures {
  sponsor: boolean
  headlines: boolean
  compellingStory: boolean
  keyInsight: boolean
  actionSteps: boolean
  ctaButton: boolean
  authorProfile: boolean
  feedback: boolean
  socialLinks: boolean
  additionalStories: boolean
}

export const defaultFeatures: NewsletterFeatures = {
  sponsor: false,
  headlines: true,
  compellingStory: true,
  keyInsight: true,
  actionSteps: true,
  ctaButton: true,
  authorProfile: true,
  feedback: true,
  socialLinks: true,
  additionalStories: true,
}

export const colorThemes = [
  { id: 'classic', name: 'Classic', bg: 'bg-white', headerBg: 'bg-gray-100', text: 'text-gray-800', muted: 'text-gray-500', accent: 'text-blue-600', cardBg: 'bg-gray-50' },
  { id: 'modern', name: 'Modern', bg: 'bg-gradient-to-br from-slate-900 to-slate-800', headerBg: 'bg-slate-800', text: 'text-white', muted: 'text-gray-300', accent: 'text-purple-400', cardBg: 'bg-white/10' },
  { id: 'minimal', name: 'Minimal', bg: 'bg-gray-50', headerBg: 'bg-white', text: 'text-gray-800', muted: 'text-gray-400', accent: 'text-gray-600', cardBg: 'bg-white' },
  { id: 'vibrant', name: 'Vibrant', bg: 'bg-gradient-to-br from-purple-500 to-pink-500', headerBg: 'bg-purple-600', text: 'text-white', muted: 'text-white/80', accent: 'text-yellow-300', cardBg: 'bg-white/20' },
  { id: 'corporate', name: 'Corporate', bg: 'bg-blue-900', headerBg: 'bg-blue-950', text: 'text-white', muted: 'text-blue-200', accent: 'text-blue-300', cardBg: 'bg-white/10' },
  { id: 'creative', name: 'Creative', bg: 'bg-gradient-to-br from-amber-400 to-orange-500', headerBg: 'bg-amber-500', text: 'text-white', muted: 'text-white/80', accent: 'text-amber-900', cardBg: 'bg-white/30' },
]

export const layouts = [
  { id: 'single', name: 'Single Column', icon: '▐' },
  { id: 'magazine', name: 'Magazine', icon: '▐▌' },
  { id: 'cards', name: 'Card Grid', icon: '▦' },
]

export interface ImageSettings {
  position: 'top' | 'center' | 'bottom'
  size: 'small' | 'medium' | 'large'
  opacity: number
  rounded: boolean
}

export const defaultImageSettings: ImageSettings = {
  position: 'top',
  size: 'medium',
  opacity: 100,
  rounded: false,
}

export interface LogoSettings {
  size: 'small' | 'medium' | 'large'
  rounded: boolean
  opacity: number
}

export const defaultLogoSettings: LogoSettings = {
  size: 'medium',
  rounded: false,
  opacity: 100,
}

// Logo styles with recommended header colors
export const logoStyles = [
  { id: 'classic', name: 'Classic', description: 'Letter in rounded square', headerColor: '#1e293b' },
  { id: 'gradient', name: 'Gradient', description: 'Modern gradient', headerColor: '#4c1d95' },
  { id: 'minimal', name: 'Minimal', description: 'Clean outlined', headerColor: '#111827' },
  { id: 'tech', name: 'Tech', description: 'Circuit-inspired', headerColor: '#164e63' },
  { id: 'geometric', name: 'Geometric', description: 'Hexagonal', headerColor: '#312e81' },
  { id: 'nature', name: 'Nature', description: 'Organic shape', headerColor: '#14532d' },
]

export type LogoStyleId = typeof logoStyles[number]['id']

// Theme to header color mapping (hex equivalents of theme.headerBg)
export const themeHeaderColors: Record<string, string> = {
  classic: '#f3f4f6',   // gray-100
  modern: '#1e293b',    // slate-800
  minimal: '#ffffff',   // white
  vibrant: '#9333ea',   // purple-600
  corporate: '#172554', // blue-950
  creative: '#f59e0b',  // amber-500
}

export type ModuleKey = 'sponsor' | 'headlines' | 'compellingStory' | 'keyInsight' | 'actionSteps' | 'ctaButton' | 'authorProfile' | 'feedback' | 'socialLinks' | 'additionalStories'

export const defaultModuleOrder: ModuleKey[] = [
  'sponsor',
  'headlines', 
  'compellingStory',
  'keyInsight',
  'actionSteps',
  'ctaButton',
  'authorProfile',
  'feedback',
  'additionalStories',
  'socialLinks',
]

// Text length settings per module (sentence count 1-3 for intro text modules)
export type TextSettings = Record<ModuleKey, number>

export const defaultTextSettings: TextSettings = {
  sponsor: 3,
  headlines: 3,        // Number of headlines to show
  compellingStory: 3,  // Sentences of intro text
  keyInsight: 3,       // Sentences of insight text
  actionSteps: 3,      // Number of action steps
  ctaButton: 3,
  authorProfile: 3,
  feedback: 3,
  socialLinks: 3,
  additionalStories: 3, // Number of additional stories to show
}

interface SavedState {
  brandData: BrandData | null
  features: NewsletterFeatures
  themeId: string
  layoutId: string
  previewSize: 'desktop' | 'mobile'
  stories: Story[]
  imageSettings: ImageSettings
  logoSettings: LogoSettings
  headerColor: string
  moduleOrder: ModuleKey[]
  textSettings: TextSettings
  savedAt: number
}

function loadSavedState(): Partial<SavedState> | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    console.log('[NewsDelivered] Loading state:', saved ? 'found' : 'empty')
    if (!saved) return null
    const state = JSON.parse(saved) as SavedState
    // Expire after 24 hours
    if (Date.now() - state.savedAt > 24 * 60 * 60 * 1000) {
      console.log('[NewsDelivered] State expired, clearing')
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    console.log('[NewsDelivered] Loaded state with brandData:', !!state.brandData)
    return state
  } catch (e) {
    console.error('[NewsDelivered] Error loading state:', e)
    return null
  }
}

const API_BASE = import.meta.env.PROD 
  ? 'https://stellabot.app' 
  : 'https://stellabot.app'

function Demo() {
  const saved = useRef(loadSavedState())
  const [sharedLoaded, setSharedLoaded] = useState(false)
  const [mobileView, setMobileView] = useState<'settings' | 'preview'>('settings')
  const [isMobile, setIsMobile] = useState(false)
  
  // Detect mobile viewport - same pattern as Stellabot
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const [brandData, setBrandData] = useState<BrandData | null>(saved.current?.brandData ?? null)
  const [isLoading, setIsLoading] = useState(false)
  // Merge saved features with defaults to include any new features
  const [features, setFeatures] = useState<NewsletterFeatures>(() => ({
    ...defaultFeatures,
    ...(saved.current?.features ?? {})
  }))
  const [selectedTheme, setSelectedTheme] = useState(
    colorThemes.find(t => t.id === saved.current?.themeId) ?? colorThemes[0]
  )
  const [selectedLayout, setSelectedLayout] = useState(
    layouts.find(l => l.id === saved.current?.layoutId) ?? layouts[0]
  )
  const [previewSize, setPreviewSize] = useState<'desktop' | 'mobile'>(saved.current?.previewSize ?? 'desktop')
  const [stories, setStories] = useState<Story[]>(saved.current?.stories ?? [])
  const [imageSettings, setImageSettings] = useState<ImageSettings>(saved.current?.imageSettings ?? defaultImageSettings)
  const [logoSettings, setLogoSettings] = useState<LogoSettings>(saved.current?.logoSettings ?? defaultLogoSettings)
  const [headerColor, setHeaderColor] = useState<string>(saved.current?.headerColor ?? '')
  
  // Sync header color with theme when theme changes (if not custom-set)
  const effectiveHeaderColor = headerColor || themeHeaderColors[selectedTheme.id] || '#f3f4f6'
  
  // Merge saved moduleOrder with defaults to include any new modules
  const [moduleOrder, setModuleOrder] = useState<ModuleKey[]>(() => {
    const savedOrder = saved.current?.moduleOrder ?? []
    // Add any missing modules from defaults
    const missingModules = defaultModuleOrder.filter(m => !savedOrder.includes(m))
    return savedOrder.length > 0 ? [...savedOrder, ...missingModules] : defaultModuleOrder
  })
  // Merge saved textSettings with defaults for new modules
  const [textSettings, setTextSettings] = useState<TextSettings>(() => ({
    ...defaultTextSettings,
    ...(saved.current?.textSettings ?? {})
  }))

  // Save state to localStorage (debounced)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const state: SavedState = {
        brandData,
        features,
        themeId: selectedTheme.id,
        layoutId: selectedLayout.id,
        previewSize,
        stories,
        imageSettings,
        logoSettings,
        headerColor,
        moduleOrder,
        textSettings,
        savedAt: Date.now(),
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
        console.log('[NewsDelivered] Saved state, brandData:', !!brandData)
      } catch (e) {
        console.error('[NewsDelivered] Error saving state:', e)
      }
    }, 500)
    return () => clearTimeout(timeout)
  }, [brandData, features, selectedTheme, selectedLayout, previewSize, stories, imageSettings, logoSettings, headerColor, moduleOrder, textSettings])

  // Load shared config from URL on mount
  useEffect(() => {
    if (sharedLoaded) return
    
    const params = new URLSearchParams(window.location.search)
    const shareId = params.get('v')
    
    if (shareId) {
      console.log('[NewsDelivered] Loading shared config:', shareId)
      fetch(`${API_BASE}/api/newsletter-share/${shareId}`)
        .then(res => res.json())
        .then(data => {
          if (data.config) {
            const c = data.config
            if (c.brandData) setBrandData(c.brandData)
            if (c.features) setFeatures({ ...defaultFeatures, ...c.features })
            if (c.themeId) {
              const theme = colorThemes.find(t => t.id === c.themeId)
              if (theme) setSelectedTheme(theme)
            }
            if (c.layoutId) {
              const layout = layouts.find(l => l.id === c.layoutId)
              if (layout) setSelectedLayout(layout)
            }
            if (c.previewSize) setPreviewSize(c.previewSize)
            if (c.stories) setStories(c.stories)
            if (c.imageSettings) setImageSettings(c.imageSettings)
            if (c.logoSettings) setLogoSettings(c.logoSettings)
            if (c.headerColor) setHeaderColor(c.headerColor)
            if (c.moduleOrder) setModuleOrder(c.moduleOrder)
            if (c.textSettings) setTextSettings({ ...defaultTextSettings, ...c.textSettings })
            console.log('[NewsDelivered] Loaded shared config successfully')
          }
        })
        .catch(err => console.error('[NewsDelivered] Failed to load shared config:', err))
        .finally(() => setSharedLoaded(true))
    } else {
      setSharedLoaded(true)
    }
  }, [sharedLoaded])

  // Get current config for sharing
  const getConfig = () => ({
    brandData,
    features,
    themeId: selectedTheme.id,
    layoutId: selectedLayout.id,
    previewSize,
    stories,
    imageSettings,
    logoSettings,
    headerColor,
    moduleOrder,
    textSettings,
  })

  // Detect if a logo is predominantly light/white (needs dark background)
  const analyzeLogoBrightness = async (logoUrl: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas')
          const size = 50 // Sample at reduced size for performance
          canvas.width = size
          canvas.height = size
          const ctx = canvas.getContext('2d')
          if (!ctx) { resolve(false); return }
          
          ctx.drawImage(img, 0, 0, size, size)
          const imageData = ctx.getImageData(0, 0, size, size)
          const data = imageData.data
          
          let brightPixels = 0
          let totalOpaque = 0
          
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3]
            // Skip transparent pixels
            if (a < 128) continue
            totalOpaque++
            // Calculate perceived brightness (ITU-R BT.709)
            const brightness = (r * 0.2126 + g * 0.7152 + b * 0.0722)
            // Consider pixel "bright" if brightness > 200 (out of 255)
            if (brightness > 200) brightPixels++
          }
          
          // Logo is "bright" if >50% of opaque pixels are very light
          const brightRatio = totalOpaque > 0 ? brightPixels / totalOpaque : 0
          console.log('[Logo Analysis] Bright ratio:', brightRatio.toFixed(2), 'of', totalOpaque, 'pixels')
          resolve(brightRatio > 0.5)
        } catch (e) {
          console.log('[Logo Analysis] Canvas analysis failed (CORS?):', e)
          resolve(false)
        }
      }
      img.onerror = () => {
        console.log('[Logo Analysis] Failed to load image')
        resolve(false)
      }
      // Timeout fallback
      setTimeout(() => resolve(false), 3000)
      img.src = logoUrl
    })
  }

  const handleBrandLoaded = async (data: BrandData, generatedStories: Story[]) => {
    setBrandData(data)
    setStories(generatedStories)
    setIsLoading(false)
    
    // Apply brand's primary color as header color (if available)
    if (data.colors && data.colors.length > 0 && !saved.current?.headerColor) {
      setHeaderColor(data.colors[0])
    }
    
    // Auto-select dark theme if logo is bright/white
    if (data.logo && !saved.current?.themeId) {
      const isBrightLogo = await analyzeLogoBrightness(data.logo)
      if (isBrightLogo) {
        console.log('[NewsDelivered] Bright logo detected, switching to dark theme')
        const darkTheme = colorThemes.find(t => t.id === 'modern') || colorThemes[1]
        setSelectedTheme(darkTheme)
      }
    }
  }

  // Shared header component
  const Header = ({ stacked = false }: { stacked?: boolean }) => (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-3 shadow-lg">
      <div className="max-w-7xl mx-auto">
        {stacked ? (
          // Mobile: stacked layout - logo on top, URL input below
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold text-white">NewsDelivered</h1>
            <UrlInput 
              onBrandLoaded={handleBrandLoaded}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              getConfig={getConfig}
              hasBrandData={!!brandData}
              compact={true}
            />
          </div>
        ) : (
          // Desktop: side by side
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-white whitespace-nowrap">NewsDelivered</h1>
            <UrlInput 
              onBrandLoaded={handleBrandLoaded}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              getConfig={getConfig}
              hasBrandData={!!brandData}
            />
          </div>
        )}
      </div>
    </div>
  )

  // Shared preview component
  const PreviewContent = ({ showPhoneFrame = false }: { showPhoneFrame?: boolean }) => (
    <div className="flex justify-center h-full">
      <div className={`w-full ${showPhoneFrame && previewSize === 'mobile' ? 'max-w-[375px]' : previewSize === 'mobile' ? 'max-w-[375px]' : 'max-w-2xl'}`}>
        {showPhoneFrame && previewSize === 'mobile' ? (
          <div className="bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
            <div className="bg-gray-800 rounded-t-[2rem] h-6 flex justify-center items-end pb-1">
              <div className="w-20 h-4 bg-black rounded-full" />
            </div>
            <div className="bg-white rounded-b-[2rem] overflow-hidden">
              <NewsletterPreview
                brandData={brandData}
                features={features}
                theme={selectedTheme}
                layout={selectedLayout}
                stories={stories.filter(s => s.selected)}
                isMobile={true}
                isLoading={isLoading}
                imageSettings={imageSettings}
                onImageSettingsChange={setImageSettings}
                logoSettings={logoSettings}
                onLogoSettingsChange={setLogoSettings}
                moduleOrder={moduleOrder}
                textSettings={textSettings}
                headerColor={effectiveHeaderColor}
                onHeaderColorChange={setHeaderColor}
              />
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <NewsletterPreview
              brandData={brandData}
              features={features}
              theme={selectedTheme}
              layout={selectedLayout}
              stories={stories.filter(s => s.selected)}
              isMobile={previewSize === 'mobile'}
              isLoading={isLoading}
              imageSettings={imageSettings}
              onImageSettingsChange={setImageSettings}
              logoSettings={logoSettings}
              onLogoSettingsChange={setLogoSettings}
              moduleOrder={moduleOrder}
              textSettings={textSettings}
              headerColor={effectiveHeaderColor}
              onHeaderColorChange={setHeaderColor}
            />
          </div>
        )}
      </div>
    </div>
  )

  // Mobile toggle component - fixed at bottom for easy thumb access
  const MobileToggle = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-3 py-2 pb-safe z-50 shadow-lg">
      <div className="flex rounded-lg bg-gray-100 p-1 gap-1">
        <button
          onClick={() => setMobileView('settings')}
          className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
            mobileView === 'settings'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          ⚙️ Settings
        </button>
        <button
          onClick={() => setMobileView('preview')}
          className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
            mobileView === 'preview'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          👁️ Preview
        </button>
      </div>
    </div>
  )

  // MOBILE LAYOUT - completely separate from desktop
  if (isMobile) {
    return (
      <div className="h-dvh flex flex-col overflow-hidden">
        <Header stacked={true} />
        <div className="flex-1 min-h-0 overflow-hidden">
          {mobileView === 'settings' ? (
            <div className="h-full overflow-y-auto pb-16">
              <EditorSidebar
                brandData={brandData}
                features={features}
                onFeaturesChange={setFeatures}
                selectedTheme={selectedTheme}
                onThemeChange={setSelectedTheme}
                selectedLayout={selectedLayout}
                onLayoutChange={setSelectedLayout}
                previewSize={previewSize}
                onPreviewSizeChange={setPreviewSize}
                stories={stories}
                onStoriesChange={setStories}
                moduleOrder={moduleOrder}
                onModuleOrderChange={setModuleOrder}
                textSettings={textSettings}
                onTextSettingsChange={setTextSettings}
              />
            </div>
          ) : (
            <div className="h-full overflow-y-auto bg-gray-100 p-4 pb-20">
              <PreviewContent showPhoneFrame={false} />
            </div>
          )}
        </div>
        <MobileToggle />
      </div>
    )
  }

  // DESKTOP LAYOUT - side by side
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <EditorSidebar
          brandData={brandData}
          features={features}
          onFeaturesChange={setFeatures}
          selectedTheme={selectedTheme}
          onThemeChange={setSelectedTheme}
          selectedLayout={selectedLayout}
          onLayoutChange={setSelectedLayout}
          previewSize={previewSize}
          onPreviewSizeChange={setPreviewSize}
          stories={stories}
          onStoriesChange={setStories}
          moduleOrder={moduleOrder}
          onModuleOrderChange={setModuleOrder}
          textSettings={textSettings}
          onTextSettingsChange={setTextSettings}
        />
        <div className="flex-1 bg-gray-100 p-6 overflow-auto">
          <PreviewContent showPhoneFrame={true} />
        </div>
      </div>
    </div>
  )
}

export default Demo
