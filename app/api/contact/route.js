import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USER, // This email is sending the emails
        pass: process.env.GMAIL_PASS,
    },
});

// Log the sending email for verification
console.log('Sending email as:', process.env.GMAIL_USER);

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

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
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Submission successful' });
    } catch (error) {
        console.error('Error sending email:', error); // Log the error to the console
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
}