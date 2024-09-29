// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'ไม่มีการอนุญาต' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'การตรวจสอบ JWT ล้มเหลว' });
        }
        req.user = user;
        next();
    });
};

exports.checkRole = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'ไม่มีสิทธิ์ในการเข้าถึง' });
        }
        next();
    };
};
