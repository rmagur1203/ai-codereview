import { useState, useEffect } from 'react'

interface CTAButtonProps {
  onClick: () => void
}

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  color: string
  opacity: number
}

const CTAButton = ({ onClick }: CTAButtonProps) => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isPulsing, setIsPulsing] = useState(false)

  const colors = ['#00f5ff', '#ff00ff', '#ffff00']

  const createParticles = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const newParticles: Particle[] = []
    const particleCount = 30

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount
      const velocity = 2 + Math.random() * 3
      newParticles.push({
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
      })
    }

    setParticles(newParticles)
    setIsPulsing(true)
    setTimeout(() => setIsPulsing(false), 500)
  }

  useEffect(() => {
    if (particles.length === 0) return

    const interval = setInterval(() => {
      setParticles((prevParticles) => {
        const updated = prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            opacity: particle.opacity - 0.02,
          }))
          .filter((particle) => particle.opacity > 0)

        return updated
      })
    }, 16)

    return () => clearInterval(interval)
  }, [particles.length])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    createParticles(event)
    onClick()
  }

  return (
    <>
      {/* 파티클 렌더링 */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-3 h-3 rounded-full pointer-events-none z-[9999]"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
        />
      ))}

      <button
        onClick={handleClick}
        className={`
          mt-8 px-12 py-4 text-lg md:text-xl font-bold text-black
          bg-gradient-to-r from-cyan-400 to-fuchsia-500
          border-none rounded-full cursor-pointer
          transition-all duration-300
          uppercase tracking-wider
          shadow-[0_5px_20px_rgba(0,245,255,0.4)]
          hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,0,255,0.6)]
          active:scale-[0.98]
          relative overflow-hidden
          before:content-[''] before:absolute before:top-0 before:-left-full
          before:w-full before:h-full
          before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
          before:transition-all before:duration-500
          hover:before:left-full
          ${isPulsing ? 'animate-pulse-custom' : ''}
        `}
      >
        시작하기
      </button>
    </>
  )
}

export default CTAButton

