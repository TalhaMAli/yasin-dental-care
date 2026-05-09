module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f8ff',
          100: '#eaf3ff',
          200: '#d4e7ff',
          300: '#4a90d9',
          400: '#2563b0',
          500: '#2563b0',
          600: '#1a3b6e',
          700: '#1a3b6e',
          800: '#0d1f3c',
          900: '#0d1f3c',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
