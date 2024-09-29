// server.js
const express = require('express');
const cors = require('cors'); // นำเข้าแพ็กเกจ cors
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // เชื่อมต่อกับฐานข้อมูล
const authRoutes = require('./routes/authRoutes'); // นำเข้า authRoutes
const productRoutes = require('./routes/productRoutes'); // นำเข้า productRoutes

// โหลดตัวแปรสิ่งแวดล้อมจากไฟล์ .env
dotenv.config();

const app = express(); // สร้างแอปพลิเคชัน Express

app.use(express.json()); // ใช้ middleware เพื่อแปลง JSON request body
connectDB(); // เชื่อมต่อกับฐานข้อมูล

const port = process.env.PORT || 4000; // กำหนดพอร์ต

// ตั้งค่า CORS options
const corsOptions = {
    origin: '*', // อนุญาตการร้องขอจากทุกที่
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};


// ใช้งาน CORS โดยมีตัวเลือกที่กำหนด
app.use(cors(corsOptions));

// เส้นทางสำหรับการตรวจสอบว่าเซิร์ฟเวอร์ทำงานอยู่
app.get('/', (req, res) => {
    res.send('เซิร์ฟเวอร์ทำงานอยู่'); // ส่งข้อความกลับเมื่อเข้าถึง root
});

// เส้นทางสำหรับการจัดการผู้ใช้
app.use('/api/auth', authRoutes); // เส้นทางสำหรับ auth
// เส้นทางสำหรับการจัดการสินค้า
app.use('/api/products', productRoutes); // เส้นทางสำหรับ products

// เริ่มการทำงานของเซิร์ฟเวอร์
app.listen(port, () => {
    console.log(`คุณสามารถเข้าถึงได้ที่: http://localhost:${port}`);
});
