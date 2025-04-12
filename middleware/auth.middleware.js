const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';


exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; //bearer token
    if(!token) return res.status(401).json({error: 'Access Denied'});

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err) {
        res.status(403).json({error: 'Invalid Token'})
    }
};


exports.requireRole = (role) => {
    return (req, res, next) => {
        if(req.user?.role !== role) {
            return res.status(403).json({error: 'Forbidden'});
        }
        next();
    }
}