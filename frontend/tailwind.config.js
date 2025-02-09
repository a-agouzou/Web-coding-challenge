/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#00ADB5',
            dark: '#0A969D',
            light: '#33BDC4', 
          },
          background: {
            DEFAULT: '#1B262C',
            card: '#222831',
            input: '#2C353D',
          },
          content: {
            primary: '#EEEEEE',
            secondary: '#888888',
            accent: '#00ADB5',
          },
          border: {
            DEFAULT: '#393E46',
          },
        },
      },
    },
    plugins: [],
  }