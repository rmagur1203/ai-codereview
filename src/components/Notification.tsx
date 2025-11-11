import { useState, useEffect } from 'react'

interface NotificationProps {
  message: string
}

const Notification = ({ message }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // 마운트 시 애니메이션 시작
    setTimeout(() => setIsVisible(true), 10)

    // 3초 후 사라지는 애니메이션
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 3000)

    return () => clearTimeout(exitTimer)
  }, [])

  return (
    <div
      className={`
        fixed top-5 left-1/2 -translate-x-1/2
        px-8 py-4 bg-cyan-400/90 text-black rounded-xl font-bold
        z-[10000] shadow-[0_5px_20px_rgba(0,245,255,0.5)]
        transition-all duration-500
        ${isVisible && !isExiting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}
      `}
    >
      {message}
    </div>
  )
}

export default Notification

