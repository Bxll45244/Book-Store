import axios from 'axios';

const API_URL = 'http://localhost:4000'; // URL ของ backend

// ฟังก์ชันสำหรับดึงข้อมูลทั้งหมด
export const fetchBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}/books`);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

// ฟังก์ชันสำหรับเพิ่มหนังสือ
export const addBook = async (book) => {
    try {
        const response = await axios.post(`${API_URL}/books`, book);
        return response.data;
    } catch (error) {
        console.error('Error adding book:', error);
        throw error;
    }
};

// ฟังก์ชันสำหรับลบหนังสือ
export const deleteBook = async (id) => {
    try {
        await axios.delete(`${API_URL}/books/${id}`);
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
};

// ฟังก์ชันสำหรับดึงรายละเอียดหนังสือโดย ID
export const fetchBookById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/books/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching book:', error);
        throw error;
    }
};
