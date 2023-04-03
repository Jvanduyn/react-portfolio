import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styles = {
    navbarStyle: {
        background: '#12112b',
        color: '#564E58',
    },
};

function Header({ currentPage, handlePageChange }) {
    return (
        <div >
            <Navbar expand="lg" style={styles.navbarStyle} variant="dark">
                <Container >
                    <Navbar.Brand href="#home">Jacob VanDuyn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link
                                href="#Home"
                                onClick={() => handlePageChange('Home')}
                                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                                Home
                            </Nav.Link>

                            <Nav.Link href="#Projects"
                                onClick={() => handlePageChange('Projects')}
                                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                                Projects
                            </Nav.Link>

                            <Nav.Link href="#Resume"
                                onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                                Resume
                            </Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#Contact"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                                Contact Me
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}


export default Header;