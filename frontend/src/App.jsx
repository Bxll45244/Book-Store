import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminDashboard from './components/AdminDashboard';
import './index.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
