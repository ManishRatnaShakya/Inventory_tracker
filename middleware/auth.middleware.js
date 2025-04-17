const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';


exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; //bearer token
    console.log(token)

    if(!token) return res.status(401).json({error: 'Access Denied'});

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err) {
        res.status(403).json({error: 'Invalid Token'})
    }
};


exports.requireRole = (...allowedRoles) => {
    return (req, res, next) => {
      const user = req.user;
        if (!user || !allowedRoles.includes(user.role)) {
            return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
        }
        next();
    };
  };