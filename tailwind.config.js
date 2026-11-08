/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeDark: '#030806',
        themeDarker: '#010403',
        timelineGreen: '#00FF88',
        neonEmerald: '#10B981',
        lokiGlow: '#22c55e',
        deepForest: '#062419',
        borderGreen: '#0f392b',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 255, 136, 0.25)',
        'glow-md': '0 0 25px rgba(0, 255, 136, 0.4)',
        'glow-lg': '0 0 45px rgba(0, 255, 136, 0.55)',
        'glow-pulse': '0 0 30px rgba(16, 185, 129, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}

