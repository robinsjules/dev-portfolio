import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { email, subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smt.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_FROM,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        })

        const mailOption = {
            from: 'robins.julesasner@gmail.com',
            to: 'robins.julesasner@gmail.com',
            subject: subject,
            html: `
        <h3> Dear Jules, you have a new message written via your portfolio website:</h3>
        <p> ${message} </p>
        <br/>
        <p> Sender: ${email} </p>
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}