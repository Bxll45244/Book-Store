const crypto = require('crypto');

// สร้าง JWT_SECRET
const secret = crypto.randomBytes(64).toString('hex');
console.log('Generated JWT Secret:', secret);
