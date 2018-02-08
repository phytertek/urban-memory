module.exports = {
  // App Components
  Components: {
    Auth: {
      Schema: 'authentication user schema',
      Services: 'authenticatedRoute and decodeToken',
      Routes: {
        '/auth': [
          'POST /register - new user registration',
          'POST /update - username and password update',
          'POST /login - user login',
          'GET /logout - user logout'
        ],
        '/admin': [
          'POST /makeSystemAdmin - create first System Admin',
          'POST /add-admin-route - add user as a Route Admin'
        ]
      }
    },
    User: {
      Schema: 'base user schema',
      Routes: {
        '/user': [
          "GET /all - returns all user's",
          'GET /one - returns a user by query params',
          'GET /current - returns currently logged in user'
        ]
      }
    }
  },
  // App Configuration
  Config: {
    Level: process.env.NODE_ENV || 'development',
    Name: process.env.NAME || 'stripe_int',
    Host: process.env.HOST || 'http://localhost',
    Port: process.env.PORT || 4343,
    DatabaseName: process.env.DBNAME || 'stripe_int Dev DB',
    DatabaseURI: process.env.DB_URI || 'mongodb://localhost/apier-dev',
    JWTSecret: process.env.JWT_SECRET || '}J3oh3@w"d$@0m}y:j!X*m1GpI&!bHZg',
    BcryptCost: process.env.BCRYPT_COST || 11,
    SSK: process.env.SSK
  }
};
