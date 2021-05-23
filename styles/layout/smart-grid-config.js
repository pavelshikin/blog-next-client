const smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
let settings = {
  outputStyle: 'scss',
  columns: 12,
  offset: '30px',
  mobileFirst: false,
  container: {
    maxWidth: '1400px',
    fields: '30px'
  },
  breakPoints: {
    lg: {
      width: '1100px',
    },
    md: {
      width: '960px'
    },
    sm: {
      width: '780px',
      fields: '20px',
      offset: '20px'
    },
    xs: {
      width: '560px',
      fields: '10px',
      offset: '10px'
    },
    xss: {
      width: '320px',
      fields: '5px',
      offset: '5px'
    }
  },
  mixinNames: {
    container: "container"
  }
};

smartgrid( './' , settings);