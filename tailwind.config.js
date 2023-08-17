/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': 'Kanit, sans-serif'
      },
      height: {
        'all': '100vh',
      },
      backgroundImage: {
        'image': "url('/assets/bg.jpg')",
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

