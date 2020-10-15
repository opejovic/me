module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif']
      },
      fontSize: {
        '7xl': '6rem'
      },
      backgroundColor: (theme) => ({
        primary: '#000814'
      })
    }
  },
  variants: {},
  plugins: []
}
