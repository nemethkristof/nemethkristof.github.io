module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#d54148',
          light: '#e46a70',
          dark: '#a82f34',
        },
        background: {
          DEFAULT: '#cfdce7',
          light: '#e3ecf5',
          dark: '#b0c0d1',
        },
        secondary: {
          DEFAULT: '#222a1f',
          light: '#3a4636',
          dark: '#161a14',
        },
      },
    },
  },
  plugins: [],
};
