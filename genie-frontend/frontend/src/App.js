// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import QuestionsPage from './pages/QuestionsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact Component={LoginPage} />
                <Route path="/questions" Component={QuestionsPage} />
            </Routes>
        </Router>
    );
}

export default App;
