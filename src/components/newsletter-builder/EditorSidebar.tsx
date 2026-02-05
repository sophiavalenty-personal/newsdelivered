import { useState } from 'react'
import type { BrandData, Story, NewsletterFeatures, ModuleKey, TextSettings } from '@/pages/Demo'
import { colorThemes, layouts } from '@/pages/Demo'

interface EditorSidebarProps {
  brandData: BrandData | null
  features: NewsletterFeatures
  onFeaturesChange: (features: NewsletterFeatures) => void
  selectedTheme: typeof colorThemes[0]
  onThemeChange: (theme: typeof colorThemes[0]) => void
  selectedLayout: typeof layouts[0]
  onLayoutChange: (layout: typeof layouts[0]) => void
  previewSize: 'desktop' | 'mobile'
  onPreviewSizeChange: (size: 'desktop' | 'mobile') => void
  stories: Story[]
  onStoriesChange: (stories: Story[]) => void
  moduleOrder: ModuleKey[]
  onModuleOrderChange: (order: ModuleKey[]) => void
  textSettings: TextSettings
  onTextSettingsChange: (settings: TextSettings) => void
}

// Modules that have adjustable text
const textAdjustableModules: ModuleKey[] = ['headlines', 'compellingStory', 'keyInsight', 'actionSteps', 'additionalStories']

const moduleMeta: Record<ModuleKey, { name: string; icon: string }> = {
  sponsor: { name: 'Sponsor', icon: '💰' },
  headlines: { name: 'Headlines', icon: '📰' },
  compellingStory: { name: 'Featured Story', icon: '📖' },
  keyInsight: { name: 'Key Insight', icon: '💡' },
  actionSteps: { name: 'Action Steps', icon: '✅' },
  ctaButton: { name: 'CTA Button', icon: '🎯' },
  authorProfile: { name: 'Author', icon: '👤' },
  feedback: { name: 'Feedback', icon: '👍' },
  additionalStories: { name: 'More Stories', icon: '📑' },
  socialLinks: { name: 'Social Links', icon: '🔗' },
}

export function EditorSidebar({
  brandData,
  features,
  onFeaturesChange,
  selectedTheme,
  onThemeChange,
  selectedLayout,
  onLayoutChange,
  previewSize,
  onPreviewSizeChange,
  stories,
  onStoriesChange,
  moduleOrder,
  onModuleOrderChange,
  textSettings,
  onTextSettingsChange,
}: EditorSidebarProps) {
  const [draggedModule, setDraggedModule] = useState<ModuleKey | null>(null)
  const [dragOverModule, setDragOverModule] = useState<ModuleKey | null>(null)
  const [textSliderOpen, setTextSliderOpen] = useState<ModuleKey | null>(null)

  const toggleFeature = (key: keyof NewsletterFeatures) => {
    onFeaturesChange({ ...features, [key]: !features[key] })
  }

  const handleDragStart = (e: React.DragEvent, key: ModuleKey) => {
    setDraggedModule(key)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e: React.DragEvent, key: ModuleKey) => {
    e.preventDefault()
    if (draggedModule && draggedModule !== key) {
      setDragOverModule(key)
    }
  }

  const handleDragLeave = () => {
    setDragOverModule(null)
  }

  const handleDrop = (e: React.DragEvent, targetKey: ModuleKey) => {
    e.preventDefault()
    if (!draggedModule || draggedModule === targetKey) return

    const newOrder = [...moduleOrder]
    const draggedIdx = newOrder.indexOf(draggedModule)
    const targetIdx = newOrder.indexOf(targetKey)
    
    newOrder.splice(draggedIdx, 1)
    newOrder.splice(targetIdx, 0, draggedModule)
    
    onModuleOrderChange(newOrder)
    setDraggedModule(null)
    setDragOverModule(null)
  }

  const handleDragEnd = () => {
    setDraggedModule(null)
    setDragOverModule(null)
  }

  const toggleStory = (storyId: string) => {
    onStoriesChange(stories.map(s => 
      s.id === storyId ? { ...s, selected: !s.selected } : s
    ))
  }

  return (
    <div className="w-full md:w-72 bg-white md:border-r border-gray-200 overflow-y-auto md:flex-shrink-0">
      {/* Brand Info */}
      {brandData && (
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="flex items-center gap-3">
            {brandData.logo ? (
              <img src={brandData.logo} alt={brandData.name} className="w-10 h-10 object-contain rounded" />
            ) : (
              <div className="w-10 h-10 rounded bg-purple-500 flex items-center justify-center text-white font-bold">
                {(brandData.name || 'B').charAt(0)}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-800 truncate">{brandData.name || 'Your Brand'}</h3>
              <p className="text-xs text-gray-500">{brandData.industry}</p>
            </div>
          </div>
        </div>
      )}

      {/* Preview Size Toggle */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Preview</h4>
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => onPreviewSizeChange('desktop')}
            className={`flex-1 flex items-center justify-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              previewSize === 'desktop' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Desktop
          </button>
          <button
            onClick={() => onPreviewSizeChange('mobile')}
            className={`flex-1 flex items-center justify-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              previewSize === 'mobile' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Mobile
          </button>
        </div>
      </div>

      {/* Color Theme */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Theme</h4>
        <div className="grid grid-cols-3 gap-2">
          {colorThemes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => onThemeChange(theme)}
              className={`rounded-lg overflow-hidden border-2 transition-all ${
                selectedTheme.id === theme.id ? 'border-purple-500 ring-2 ring-purple-500/30' : 'border-gray-200'
              }`}
            >
              <div className={`h-8 ${theme.bg}`}>
                <div className={`h-2 ${theme.headerBg}`} />
              </div>
              <div className="py-1 bg-white text-center">
                <span className="text-[10px] font-medium text-gray-600">{theme.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Layout */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Layout</h4>
        <div className="flex gap-2">
          {layouts.map((layout) => (
            <button
              key={layout.id}
              onClick={() => onLayoutChange(layout)}
              className={`flex-1 p-2 rounded-lg border-2 transition-all ${
                selectedLayout.id === layout.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
              }`}
            >
              <div className="text-lg text-center">{layout.icon}</div>
              <div className="text-[10px] text-center text-gray-600 mt-1">{layout.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Features/Modules */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Modules <span className="text-gray-400 font-normal">(drag to reorder)</span>
        </h4>
        <div className="space-y-1">
          {moduleOrder.map((key) => {
            const meta = moduleMeta[key]
            const hasTextAdjust = textAdjustableModules.includes(key)
            return (
              <div
                key={key}
                draggable
                onDragStart={(e) => handleDragStart(e, key)}
                onDragOver={(e) => handleDragOver(e, key)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, key)}
                onDragEnd={handleDragEnd}
                className={`relative w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-all cursor-grab active:cursor-grabbing ${
                  draggedModule === key ? 'opacity-50' : ''
                } ${
                  dragOverModule === key ? 'ring-2 ring-purple-400 ring-offset-1' : ''
                } ${
                  features[key] 
                    ? 'bg-purple-50 text-purple-700' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {/* Drag handle */}
                <span className="text-gray-400 cursor-grab">⋮⋮</span>
                <span className="text-base">{meta.icon}</span>
                <span className="flex-1">{meta.name}</span>
                
                {/* Text length control (sentences/items) */}
                {hasTextAdjust && (
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setTextSliderOpen(textSliderOpen === key ? null : key)
                      }}
                      className={`p-1 rounded hover:bg-purple-100 transition-colors ${
                        textSettings[key] < 3 ? 'text-purple-600' : 'text-gray-400'
                      }`}
                      title="Adjust text length"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h6" />
                      </svg>
                    </button>
                    
                    {/* Text length slider popup */}
                    {textSliderOpen === key && (
                      <div 
                        className="absolute right-0 top-full mt-1 z-50 bg-white rounded-lg shadow-xl border p-3 min-w-[180px]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="text-[10px] text-gray-500 uppercase tracking-wide mb-2">
                          {key === 'headlines' || key === 'actionSteps' || key === 'additionalStories'
                            ? `Items: ${textSettings[key]}`
                            : textSettings[key] >= 5 
                              ? 'Full paragraph'
                              : `Sentences: ${textSettings[key]}`
                          }
                        </div>
                        <input
                          type="range"
                          min="1"
                          max={key === 'headlines' || key === 'actionSteps' || key === 'additionalStories' ? '3' : '5'}
                          step="1"
                          value={textSettings[key]}
                          onChange={(e) => onTextSettingsChange({
                            ...textSettings,
                            [key]: Number(e.target.value)
                          })}
                          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        />
                        <div className="flex justify-between text-[9px] text-gray-400 mt-1">
                          {key === 'headlines' || key === 'actionSteps' || key === 'additionalStories' ? (
                            <>
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                            </>
                          ) : (
                            <>
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>4</span>
                              <span>Full</span>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div 
                  onClick={(e) => { e.stopPropagation(); toggleFeature(key) }}
                  className={`w-8 h-4 rounded-full transition-colors cursor-pointer ${
                    features[key] ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full bg-white shadow mt-0.5 transition-transform ${
                    features[key] ? 'translate-x-4' : 'translate-x-0.5'
                  }`} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Content/Stories */}
      {stories.length > 0 && (
        <div className="p-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Content</h4>
          <div className="space-y-1">
            {stories.map((story) => (
              <button
                key={story.id}
                onClick={() => toggleStory(story.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-all ${
                  story.selected 
                    ? 'bg-purple-50 text-purple-700' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  story.selected ? 'bg-purple-500 border-purple-500' : 'border-gray-300'
                }`}>
                  {story.selected && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="flex-1 truncate">{story.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="p-4 mt-auto">
        <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all">
          🚀 Get Started
        </button>
      </div>
    </div>
  )
}
