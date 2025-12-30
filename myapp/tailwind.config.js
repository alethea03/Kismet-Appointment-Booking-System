/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8D27DE',
        secondary: '#D4AF37',
        brandDark: '#251032',
        neutralCool: '#E3D9E5',
        neutralWarm: '#F9F6F0',
      },
    },
  },
  plugins: [],
}