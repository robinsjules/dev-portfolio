import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import validator from 'validator'

export async function POST(request) {
    try {
        const { email, subject, message } = await request.json();

        // Enhanced validation
        if (!email || !subject || !message) {
            return NextResponse.json({ 
                message: "All fields are required" 
            }, { status: 400 });
        }

        if (!validator.isEmail(email)) {
            return NextResponse.json({ 
                message: "Invalid email address" 
            }, { status: 400 });
        }

        if (!process.env.GMAIL_FROM || !process.env.GMAIL_APP_PASSWORD) {
            console.error('Missing environment variables');
            return NextResponse.json({ 
                message: "Server configuration error" 
            }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_FROM,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        try {
            await transporter.verify();
        } catch (verifyError) {
            console.error('Transporter verification failed:', verifyError);
            return NextResponse.json({ 
                message: "Email server configuration error" 
            }, { status: 500 });
        }

        const sanitizedMessage = validator.escape(message).replace(/\n/g, '<br>');

        const mailOptions = {
            from: process.env.GMAIL_FROM,
            to: process.env.GMAIL_FROM,
            subject: `Portfolio Contact: ${validator.escape(subject)}`,
            html: `
                <h3>New message from portfolio website</h3>
                <p><strong>Subject:</strong> ${validator.escape(subject)}</p>
                <p><strong>Message:</strong></p>
                <p>${sanitizedMessage}</p>
                <br/>
                <p><strong>Sender:</strong> ${validator.escape(email)}</p>
            `,
            replyTo: email
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ 
            message: "Failed to send email. Please try again later."
        }, { status: 500 });
    }
}