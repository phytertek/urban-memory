const {
  getStripeAuth,
  getStripePeekAuth,
  postStripeNewAccount
} = require('./controllers');
const { authorizeRoute } = require('../services').Auth;

module.exports = {
  '/stripe': {
    // head: {
    //   '/Route': 'A controller function'
    // },
    get: {
      '/auth': getStripeAuth,
      '/peekAuth': getStripePeekAuth // [authorizeRoute, getStripePeekAuth]
    },
    post: {
      '/new-account': postStripeNewAccount
    }
    // patch: {},
    // delete: {}
  }
};

// Test Strip Routes
