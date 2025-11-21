/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60A5FA',
        accent: '#A78BFA',
        bg: '#0a0a0f',
        card: 'rgba(255,255,255,0.04)',
        'card-strong': 'rgba(255,255,255,0.06)',
        neon: 'rgba(99,102,241,0.16)',
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
      },
      borderRadius: {
        xl: '14px',
        '2xl': '16px',
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 8px 30px rgba(99,102,241,0.16)',
      },
    },
  },
  plugins: [],
}


// import type { Config } from 'tailwindcss'
// export default {
// content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
// theme: {
// extend: {
// colors: {
// primary: '#00ff88',
// accent: '#00d9ff',
// card: '#141414',
// bg: '#0a0a0a'
// }
// }
// },
// plugins: []
// } as Config