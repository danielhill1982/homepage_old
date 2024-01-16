/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/preline/preline.js'
  ],
  plugins: [
    require(
    'preline/plugin'
    )
  ],
}

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'purple': '#b520ff',
      'carbon': '#120015',
      'silver': '#f1f1f1',
      'azuro': '#0099ff',
      
    }
  }
}