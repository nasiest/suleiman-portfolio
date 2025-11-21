import type { Config } from 'tailwindcss'
export default {
content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
theme: {
extend: {
colors: {
primary: '#00ff88',
accent: '#00d9ff',
card: '#141414',
bg: '#0a0a0a'
}
}
},
plugins: []
} as Config