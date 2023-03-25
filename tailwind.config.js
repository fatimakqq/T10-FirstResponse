module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundColor:{
        'bg-opacity-50': 'rgba(39, 88, 68, 0.5)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'hover', 'focus'],
    },
  },
  plugins: [],
};
