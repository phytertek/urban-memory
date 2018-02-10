module.exports = {
  User: {
    Schema: {
      firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      type: {
        type: String,
        enum: {
          values: ['Customer', 'Admin'],
          message: `{VALUE} is not a valid entry for {PATH}`
        },
        default: 'Customer'
      }
    }
  }
};
