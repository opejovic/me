module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif'],
        alliance: ['alliance-regular', 'sans-serif'],
        'alliance-medium': ['alliance-medium', 'sans-serif'],
        'roboto-mono': ['roboto-mono-light', 'mono']
      },
      fontSize: {
        '6xl': '6rem',
        '7xl': '7rem',
        '8xl': '8rem'
      },
      backgroundColor: (theme) => ({
        primary: '#000814'
      })
    }
  },
  variants: {},
  plugins: []
}
