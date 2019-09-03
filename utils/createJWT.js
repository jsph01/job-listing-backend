const jwt = require('jsonwebtoken');

module.exports = (user) => {
  return jwt.sign({
      user: {
          id: user._id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          zipcode: user.zipcode,
          portraitUrl: user.portraitUrl
      }
  }, process.env.SECRET, { expiresIn: '24h' });
};
