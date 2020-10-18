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
        '6xl': '4rem',
        '7xl': '6rem',
        '8xl': '7rem'
      },
      backgroundColor: (theme) => ({
        primary: '#000814'
      })
    }
  },
  variants: {},
  plugins: []
}
