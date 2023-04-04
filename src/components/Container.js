import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import Footer from './Footer';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Home />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer style={{ position: 'absolute', bottom: 0, width: '100%' }} />
        </div >
    );
}
