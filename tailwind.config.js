/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          dark: "#0a0f1c",
          darksec: "#0f172a",
          accent: "#3b82f6",
          accentlight: "#60a5fa",
        },
      },
    },
    plugins: [],
  }