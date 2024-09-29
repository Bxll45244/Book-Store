const express = require('express');
const { register, login } = require('../controllers/authController'); // นำเข้าคอนโทรลเลอร์ที่เกี่ยวข้อง
const router = express.Router();

// เส้นทางสำหรับการสมัครสมาชิก
router.post('/register', register);

// เส้นทางสำหรับการลงชื่อเข้าใช้
router.post('/login', login);

module.exports = router;
