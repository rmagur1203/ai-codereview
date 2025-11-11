import { useState } from 'react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-2xl p-8
        transition-all duration-300 cursor-pointer
        ${isHovered 
          ? 'transform -translate-y-3 bg-white/[0.08] border-cyan-400 shadow-[0_10px_40px_rgba(0,245,255,0.3)]' 
          : ''
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-5xl mb-4 [filter:drop-shadow(0_0_10px_rgba(0,245,255,0.5))]">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl mb-2 text-cyan-400 font-semibold">
        {title}
      </h3>
      <p className="text-gray-400 text-sm md:text-base">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard

