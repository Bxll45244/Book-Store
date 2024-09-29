// controllers/productController.js
const Product = require('../models/Product');

// สร้างผลิตภัณฑ์
exports.createProduct = async (req, res) => {
    const { name, description, price, category } = req.body;

    try {
        const product = new Product({ name, description, price, category });
        await product.save();
        res.status(201).json({ message: 'ผลิตภัณฑ์ถูกสร้างขึ้นสำเร็จ', product });
    } catch (error) {
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการสร้างผลิตภัณฑ์' });
    }
};

// ดึงข้อมูลผลิตภัณฑ์ทั้งหมด
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลผลิตภัณฑ์' });
    }
};

// ดึงข้อมูลผลิตภัณฑ์ตาม ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'ไม่พบผลิตภัณฑ์' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลผลิตภัณฑ์' });
    }
};

// แก้ไขผลิตภัณฑ์
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'ไม่พบผลิตภัณฑ์' });
        }
        res.status(200).json({ message: 'แก้ไขผลิตภัณฑ์สำเร็จ', product });
    } catch (error) {
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการแก้ไขผลิตภัณฑ์' });
    }
};

// ลบผลิตภัณฑ์
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'ไม่พบผลิตภัณฑ์' });
        }
        res.status(200).json({ message: 'ลบผลิตภัณฑ์สำเร็จ' });
    } catch (error) {
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการลบผลิตภัณฑ์' });
    }
};
