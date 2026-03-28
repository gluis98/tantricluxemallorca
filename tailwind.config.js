/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: '#b48952',
        beige: '#d2a47b',
      },
      fontFamily: {
        urbanist: ['Urbanist Variable', 'Urbanist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        tenali: ['Tenali Ramakrishna', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        cormorant: ['Cormorant Garamond Variable', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
