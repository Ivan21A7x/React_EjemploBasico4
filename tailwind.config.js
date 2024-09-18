/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'customYellow': '#FFFFC6',  // Amarillo para notas
        'custom-green': '#4CAF50',
      },
    },
  },
  plugins: [],
}

