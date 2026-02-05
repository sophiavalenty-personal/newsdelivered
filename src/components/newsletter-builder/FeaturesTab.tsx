import type { BrandData } from '@/pages/Demo'

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
}

interface FeaturesTabProps {
  brandData: BrandData
  features: NewsletterFeatures
  onFeaturesChange: (features: NewsletterFeatures) => void
  onContinue: () => void
}

const featuresList = [
  {
    key: 'sponsor' as keyof NewsletterFeatures,
    name: 'Sponsor Section',
    description: '"Presented by" area for monetization',
    icon: '💰',
  },
  {
    key: 'headlines' as keyof NewsletterFeatures,
    name: 'Industry Headlines',
    description: '3-5 newsworthy bullet points',
    icon: '📰',
  },
  {
    key: 'compellingStory' as keyof NewsletterFeatures,
    name: 'Compelling Story',
    description: 'Main feature article or case study',
    icon: '📖',
  },
  {
    key: 'keyInsight' as keyof NewsletterFeatures,
    name: 'Key Insight',
    description: 'Your expert take with visual',
    icon: '💡',
  },
  {
    key: 'actionSteps' as keyof NewsletterFeatures,
    name: 'Action Steps',
    description: '1-3 concrete tips to implement',
    icon: '✅',
  },
  {
    key: 'ctaButton' as keyof NewsletterFeatures,
    name: 'CTA Button',
    description: 'Lead magnet or book a call',
    icon: '🎯',
  },
  {
    key: 'authorProfile' as keyof NewsletterFeatures,
    name: 'Author Profile',
    description: 'Photo, name, and contact info',
    icon: '👤',
  },
  {
    key: 'feedback' as keyof NewsletterFeatures,
    name: 'Feedback Section',
    description: '"Was this helpful?" with reactions',
    icon: '👍',
  },
  {
    key: 'socialLinks' as keyof NewsletterFeatures,
    name: 'Social Links',
    description: 'Footer social media icons',
    icon: '🔗',
  },
]

export function FeaturesTab({
  brandData,
  features,
  onFeaturesChange,
  onContinue,
}: FeaturesTabProps) {
  const toggleFeature = (key: keyof NewsletterFeatures) => {
    onFeaturesChange({
      ...features,
      [key]: !features[key],
    })
  }

  const enabledCount = Object.values(features).filter(Boolean).length

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Choose Your Features</h2>
        <p className="text-gray-500 mt-1">
          Toggle sections on/off to customize your newsletter
        </p>
      </div>

      {/* Brand Summary */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 flex items-center gap-4">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
          style={{ 
            background: brandData.colors?.length 
              ? `linear-gradient(135deg, ${brandData.colors[0]}, ${brandData.colors[1] || brandData.colors[0]})`
              : 'linear-gradient(135deg, #667eea, #764ba2)'
          }}
        >
          {(brandData.name || 'B').charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{brandData.name || 'Your Brand'}</h3>
          <p className="text-sm text-gray-500">{enabledCount} features enabled</p>
        </div>
      </div>

      {/* Feature Toggles */}
      <div className="space-y-3">
        {featuresList.map((feature) => (
          <div
            key={feature.key}
            onClick={() => toggleFeature(feature.key)}
            className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              features[feature.key]
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            {/* Toggle Switch */}
            <div className={`relative w-12 h-6 rounded-full transition-colors ${
              features[feature.key] ? 'bg-purple-500' : 'bg-gray-300'
            }`}>
              <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                features[feature.key] ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </div>

            {/* Icon */}
            <span className="text-2xl">{feature.icon}</span>

            {/* Text */}
            <div className="flex-1">
              <h4 className="font-medium text-gray-800">{feature.name}</h4>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3 justify-center pt-2">
        <button
          onClick={() => onFeaturesChange(defaultFeatures)}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Reset to Default
        </button>
        <button
          onClick={() => {
            const allOn = {} as NewsletterFeatures
            featuresList.forEach(f => allOn[f.key] = true)
            onFeaturesChange(allOn)
          }}
          className="px-4 py-2 text-sm text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded-lg transition-colors"
        >
          Enable All
        </button>
        <button
          onClick={() => {
            const allOff = {} as NewsletterFeatures
            featuresList.forEach(f => allOff[f.key] = false)
            onFeaturesChange(allOff)
          }}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Disable All
        </button>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onContinue}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:ring-4 focus:ring-purple-500/50 transition-all"
        >
          Continue to Templates →
        </button>
      </div>
    </div>
  )
}
