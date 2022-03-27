module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Serif', 'serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
