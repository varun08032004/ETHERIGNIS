// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF5722',
          600: '#E64A19',
        },
      },
    },
  },
  plugins: [],
}
