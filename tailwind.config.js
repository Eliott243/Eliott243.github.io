export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        paper: '#EFEFED',
        ink: '#111111',
        muted: '#6B6B6B',
        line: '#D6D6D2',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Inter', 'Helvetica Neue', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
