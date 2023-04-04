import React from 'react';
import Container from 'react-bootstrap/Container';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-5">
            <Container className="py-3">
                <p className="text-center mb-0">Built with React by Jacob VanDuyn</p>
            </Container>
        </footer>
    );
}