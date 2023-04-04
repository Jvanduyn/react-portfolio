import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const styles = {
    navbarStyle: {
        backgroundColor: '#343a40',
        color: '#ffffff',
        fontSize: '1.2rem',
        letterSpacing: '1px',
        padding: '1rem',
    },
};

function Header({ currentPage, handlePageChange }) {
    return (
        <Navbar style={styles.navbarStyle} expand="lg" variant="dark">
            <Navbar.Brand href="#home">Jacob VanDuyn</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        className={`nav-link${currentPage === 'Home' ? ' active' : ''}`}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        href="#projects"
                        onClick={() => handlePageChange('Projects')}
                        className={`nav-link${currentPage === 'Projects' ? ' active' : ''}`}
                    >
                        Projects
                    </Nav.Link>
                    <Nav.Link
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={`nav-link${currentPage === 'Resume' ? ' active' : ''}`}
                    >
                        Resume
                    </Nav.Link>
                    <Nav.Link
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={`nav-link${currentPage === 'Contact' ? ' active' : ''}`}
                    >
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
