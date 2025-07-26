/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll-right': 'scrollRight 20s linear infinite',
      },
      scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      colors: {
        'white-opacity-12': 'rgba(252, 243, 217, 0.12)',
        'white-opacity-7': 'rgba(252, 243, 217, 0.07)',
        'beige-opacity-70': 'rgba(255, 236, 184, 0.7)',
        'green-opacity-70': 'rgba(29, 78, 26, 0.7)',
        'green-opacity-12': 'rgba(29, 78, 26, 0.12)',
        'green-opacity-3': 'rgba(29, 78, 26, 0.03)',
      },
    },
  },
  plugins: [],
}

