/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF7F1',
          100: '#F5EEE4',
          200: '#ECE0D0',
          300: '#E0CDB8',
        },
        clay: {
          50: '#F8F1EB',
          100: '#EAD8C8',
          200: '#D6B196',
          300: '#C18A65',
          400: '#A86A45',
          500: '#8E5230',
          600: '#6F3E23',
          700: '#532D1A',
        },
        sage: {
          400: '#8A9A82',
          500: '#6B7D63',
          600: '#54614D',
        },
        ink: {
          700: '#3A352F',
          800: '#2A2620',
          900: '#1C1916',
        },
      },
      fontFamily: {
        display: ['Amita', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'ui-serif', 'cursive'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        fadeIn: 'fadeIn 1.2s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
        floatY: 'floatY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
