import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import InfoPage from './elements/InfoPage/InfoPage';
import AboutPage from './elements/aboutpage/aboutpage';
import ErrorPage from './elements/ErrorPage/ErrorPage';
import "./App.css"

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info/:id" element={<InfoPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}


export default App;
