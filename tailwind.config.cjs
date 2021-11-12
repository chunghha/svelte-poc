module.exports = {
  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
