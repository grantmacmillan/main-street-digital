// app/api/upimage/route.js

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



const pathDist = path.join(process.cwd(), '/public/images');

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get('image');
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const saveTo = path.join(pathDist, file.name);
        await fs.promises.writeFile(saveTo, Buffer.from(await file.arrayBuffer()));

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
            attachments: [
                {
                    filename: file.name,
                    path: saveTo,
                },
            ],
        };

        await transporter.sendMail(mailOptions);

        // Remove the file after sending the email
        await fs.promises.unlink(saveTo);

        return NextResponse.json({ message: 'Submission successful' });
    } catch (error) {
        console.error('Error sending email:', error); // Log the error to the console
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
}