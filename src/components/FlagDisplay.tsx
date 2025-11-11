import { useState } from 'react'

const FlagDisplay = () => {
  const [showFlag, setShowFlag] = useState(false)
  const flag = import.meta.env.VITE_FLAG

  return (
    <div className="mt-8">
      <button
        onClick={() => setShowFlag(!showFlag)}
        className="px-6 py-2 text-sm font-semibold text-cyan-400 border-2 border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
      >
        {showFlag ? '플래그 숨기기' : '플래그 보기'}
      </button>
      
      {showFlag && (
        <div className="mt-4 p-4 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-400/30 rounded-lg backdrop-blur-sm animate-fade-in-up">
          <p className="text-xs text-gray-400 mb-2">FLAG:</p>
          <code className="text-lg md:text-xl font-mono text-cyan-400 break-all">
            {flag}
          </code>
        </div>
      )}
    </div>
  )
}

export default FlagDisplay

