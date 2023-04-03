import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import Footer from './Footer';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
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
        <div style={{ background: 'black', backgroundSize: 'cover' }}>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}