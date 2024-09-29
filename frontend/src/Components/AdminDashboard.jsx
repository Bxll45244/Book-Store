import React, { useState } from 'react';
import { addBook } from '../api/api';

const AdminDashboard = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = { title, description };
        await addBook(newBook);
        setTitle('');
        setDescription('');
        alert('Book added successfully!');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Book Title"
                    className="border p-2 w-full"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Book Description"
                    className="border p-2 w-full mt-2"
                    required
                ></textarea>
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AdminDashboard;
