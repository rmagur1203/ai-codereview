/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'glitch': 'glitch 3s infinite',
        'glitch-top': 'glitchTop 2s infinite',
        'glitch-bottom': 'glitchBottom 2.5s infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'stars': 'animateStars 100s linear infinite',
        'stars2': 'animateStars 150s linear infinite',
        'stars3': 'animateStars 200s linear infinite',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'pulse-custom': 'pulse 0.5s ease',
        'slide-down': 'slideDown 0.5s ease',
        'slide-up': 'slideUp 0.5s ease',
      },
      keyframes: {
        glitch: {
          '0%, 100%': {
            textShadow: '0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00',
          },
          '15%': {
            textShadow: '0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00',
          },
          '16%': {
            textShadow: '-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00',
          },
          '49%': {
            textShadow: '-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00',
          },
          '50%': {
            textShadow: '0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00',
          },
          '99%': {
            textShadow: '0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00',
          },
        },
        glitchTop: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        glitchBottom: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(2px, -2px)' },
          '40%': { transform: 'translate(2px, 2px)' },
          '60%': { transform: 'translate(-2px, -2px)' },
          '80%': { transform: 'translate(-2px, 2px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        animateStars: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-2000px)' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          from: {
            opacity: '0',
            transform: 'translateX(-50%) translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(-50%) translateY(0)',
          },
        },
        slideUp: {
          from: {
            opacity: '1',
            transform: 'translateX(-50%) translateY(0)',
          },
          to: {
            opacity: '0',
            transform: 'translateX(-50%) translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
}

