module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
