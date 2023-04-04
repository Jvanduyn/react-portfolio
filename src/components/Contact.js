import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import './Contact.css';

function Contact() {
    const [email, setEmail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSenderInput = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'firstName') {
            setfirstName(inputValue);
        } else if (inputType === 'lastName') {
            setlastName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleMessageSend = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        setEmail('');
        setfirstName('');
        setlastName('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Jacob</h1>
            <form onSubmit={handleMessageSend}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        className="form-input"
                        value={firstName}
                        onChange={handleSenderInput}
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        id="firstName"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        className="form-input"
                        value={lastName}
                        onChange={handleSenderInput}
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        id="lastName"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        className="form-input"
                        value={email}
                        onChange={handleSenderInput}
                        type="text"
                        placeholder="example@email.com"
                        name="email"
                        id="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        className="form-input"
                        value={message}
                        onChange={handleSenderInput}
                        rows="5"
                        type="text"
                        placeholder="Your message!"
                        name="message"
                        id="message"
                    >
                    </textarea>
                </div>

                <div className="form-group">
                    <button
                        className="form-button"
                        onClick={handleMessageSend}
                        type="submit"
                        id="send"
                    >
                        Send
                    </button>
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;
