/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'font-nunito': ['Nunito', 'sans-serif'],
      backgroundImage: {
        'hero-pattern': "url('/public/photo13.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}