/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 150ms ease-out',
        fadeInSlide: 'fadeInSlide 1s ease-out',
      },

      keyframes: theme => ({
        fadeIn: {
          '100%': { opacity: 1 },
          '0%': { opacity: 0 },
        },
        fadeInSlide: {
          '100%': { opacity: 1, transform: 'translateY(0px)' },
          '25%': { opacity: 0, transform: 'translateY(-20px)' },
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
        },
      }),

      backgroundImage:
      {
        'show': "url('./images/show.jpg')"
      },
    },
  },
  plugins: [],
}

