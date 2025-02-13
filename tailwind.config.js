/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false, // Tắt preflight (reset CSS mặc định của Tailwind)
  },
  prefix: "tw-",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}