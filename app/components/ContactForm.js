// app/components/ContactForm.js

'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        if (image) {
            formData.append('image', image);
        }

        console.log('Form data being sent:', {
            name,
            email,
            message,
            image,
        });

        try {
            const response = await fetch('/api/upimage', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            const result = await response.json();
            console.log('Response from server:', result);

            if (response.ok) {
                setStatus('Submission successful');
                setName('');
                setEmail('');
                setMessage('');
                setImage(null);
            } else {
                setStatus(result.error || 'Error submitting form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('Error submitting form');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="image">Attach an image:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
            <button type="submit">Submit</button>
            {status && <p>{status}</p>}
        </form>
    );
}