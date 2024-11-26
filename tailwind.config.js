/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        textLine: {
          '0%, 100%': { width: '0%' },
          '50%': { width: '100%' },
        },
      },
      animation: {
        textLine: 'textLine 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}