/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'green': '6px 8px 10px 1px rgba(0, 0, 255, 0.1), 2px 4px 10px 1px rgba(31, 164, 239, 0.4)',
        
      },
      animation: {
        gradient: 'gradient 3s ease infinite',
        'color-change': 'color-change 15s infinite',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-size': '150% 150%', 'background-position': '100% 0%' },
          '50%': { 'background-size': '150% 150%', 'background-position': '0% 100%' },
          '100%': { 'background-size': '150% 150%', 'background-position': '100% 0%' },
        },
        'color-change': {
          '0%': { color: '#159CFD' },
          '33%': { color: '#6CAC48' },
          '66%': { color: '#F0DB4F' },
          '100%': { color: '#159CFD' },
        },
        
      },
    },
  },
  variants: {},
  plugins: [],
}

