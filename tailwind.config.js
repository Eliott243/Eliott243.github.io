export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EFEFED',
        ink: '#111111',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Impact', 'Helvetica Neue', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
