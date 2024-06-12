// app/api/contact/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import formidable from 'formidable';
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

export const config = {
    api: {
        bodyParser: false, // Disable body parsing, so formidable can handle it
    },
};

export async function POST(req) {
    const form = new formidable.IncomingForm({
        uploadDir: '/tmp', // Directory to save the files
        keepExtensions: true, // Keep file extensions
    });

    return new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Error parsing form data:', err);
                return reject(NextResponse.json({ error: 'Error parsing form data' }, { status: 500 }));
            }

            try {
                const { name, email, message } = fields;
                const attachments = [];

                if (files.image) {
                    attachments.push({
                        filename: files.image.originalFilename,
                        path: files.image.filepath,
                    });
                }

                const mailOptions = {
                    from: process.env.GMAIL_USER, // The email that sends the message
                    to: process.env.GMAIL_USER, // The email that receives the message
                    replyTo: email, // The user's email
                    subject: `New contact form submission from ${name}`,
                    text: `You have received a new message from your website contact form.\n\n` +
                        `Here are the details:\n\n` +
                        `Name: ${name}\n` +
                        `Email: ${email}\n\n` +
                        `Message:\n${message}`,
                    attachments,
                };

                console.log('Mail options:', mailOptions);

                await transporter.sendMail(mailOptions);

                // Remove the file after sending the email
                attachments.forEach((attachment) => {
                    fs.unlinkSync(attachment.path);
                });

                resolve(NextResponse.json({ message: 'Submission successful' }));
            } catch (error) {
                console.error('Error sending email:', error); // Log the error to the console
                resolve(NextResponse.json({ error: 'Error sending email' }, { status: 500 }));
            }
        });
    });
}