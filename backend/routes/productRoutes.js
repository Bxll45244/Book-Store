const express = require('express');
const { 
    getAllProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    searchProducts 
} = require('../controllers/productController'); // นำเข้าคอนโทรลเลอร์ที่เกี่ยวข้อง
const router = express.Router();

// เส้นทางสำหรับดึงข้อมูลผลิตภัณฑ์ทั้งหมด
router.get('/', getAllProducts);

// เส้นทางสำหรับดึงข้อมูลผลิตภัณฑ์ตาม ID
router.get('/:id', getProductById);

// เส้นทางสำหรับเพิ่มผลิตภัณฑ์ใหม่
router.post('/', createProduct);

// เส้นทางสำหรับอัปเดตผลิตภัณฑ์ตาม ID
router.put('/:id', updateProduct);

// เส้นทางสำหรับลบผลิตภัณฑ์ตาม ID
router.delete('/:id', deleteProduct);

// เส้นทางสำหรับค้นหาผลิตภัณฑ์
router.get('/search', searchProducts);

module.exports = router;
