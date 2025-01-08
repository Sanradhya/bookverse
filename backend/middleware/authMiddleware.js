// backend/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
const protect = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Attach decoded user info to the request
    next(); // Call next middleware or route handler
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = { protect };
