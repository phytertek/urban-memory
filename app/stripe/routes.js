const { getStripeAuth, getStripePeekAuth } = require('./controllers');
const { authorizeRoute } = require('../services').Auth;

module.exports = {
  '/stripe': {
    // head: {
    //   '/Route': 'A controller function'
    // },
    get: {
      '/auth': getStripeAuth,
      '/peekAuth': [authorizeRoute, getStripePeekAuth]
    }
    // post: {},
    // patch: {},
    // delete: {}
  }
};

// Test Strip Routes
