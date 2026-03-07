/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#b48952',
        beige: '#d2a47b',
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
        'tenali': ['Tenali Ramakrishna', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
