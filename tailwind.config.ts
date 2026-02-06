import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lumiere-black': '#000000',
        'lumiere-carbon': '#121212',
        'lumiere-silver': '#E5E5E5',
        'lumiere-platinum': '#A0A0A0',
        'lumiere-blue': '#007AFF',
        'lumiere-white': '#FFFFFF',
      },
      fontFamily: {
        'space': ['Space Mono', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
      }
    },
  },
  plugins: [],
}

export default config
