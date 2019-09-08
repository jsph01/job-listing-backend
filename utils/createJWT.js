const jwt = require('jsonwebtoken');

module.exports = (user) => {
  return jwt.sign({
      user: {
          id: user._id,
          username: user.username,
          zipcode: user.zipcode
      }
  }, process.env.SECRET, { expiresIn: '24h' });
};
