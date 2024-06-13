import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

console.log('Sending email as:', process.env.GMAIL_USER);

const pathDist = '/tmp'; // Use /tmp for temporary file storage in serverless environments
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

export async function POST(req) {
    try {
        console.log('Handling form submission');
        const formData = await req.formData();
        const file = formData.get('image');
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Received form data:', { name, email, message, file });

        if (!file) {
            throw new Error('File not provided');
        }

        if (file.size > MAX_FILE_SIZE) {
            throw new Error('File size exceeds the 10MB limit');
        }

        const saveTo = path.join(pathDist, file.name);
        await fs.promises.writeFile(saveTo, Buffer.from(await file.arrayBuffer()));
        console.log('File saved to:', saveTo);

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `New contact form submission from ${name}`,
            text: `You have received a new message from your website contact form.\n\n` +
                `Here are the details:\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`,
            attachments: [
                {
                    filename: file.name,
                    path: saveTo,
                },
            ],
        };

        console.log('Mail options:', mailOptions);

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        // Remove the file after sending the email
        await fs.promises.unlink(saveTo);
        console.log('File removed after email sent');

        return NextResponse.json({ message: 'Submission successful' });
    } catch (error) {
        console.error('Error processing submission:', error.message); // Log the error to the console
        return NextResponse.json({ error: 'Error sending email: ' + error.message }, { status: 500 });
    }
}