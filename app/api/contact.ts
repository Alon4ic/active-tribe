import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const body = await request.json();
    const { captchaToken, name, email, message } = body;

    if (!captchaToken) {
        return NextResponse.json({
            success: false,
            message: 'No CAPTCHA token provided.',
        });
    }

    // Проверка reCAPTCHA токена
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: secretKey!,
                response: captchaToken,
            }),
        }
    );

    const verification = await verificationResponse.json();

    if (!verification.success) {
        return NextResponse.json({
            success: false,
            message: 'CAPTCHA verification failed.',
            errorCodes: verification['error-codes'],
        });
    }

    try {
        // Настройка транспорта Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST, // Например, smtp.gmail.com
            port: parseInt(process.env.SMTP_PORT || '587', 10), // Обычно 587 для TLS
            secure: false, // Установите true для порта 465, иначе false
            auth: {
                user: process.env.SMTP_USER, // Логин SMTP (например, ваша почта)
                pass: process.env.SMTP_PASS, // Пароль SMTP или App Password
            },
        });

        // Отправка письма
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`, // Отправитель
            to: 'support@yourdomain.com', // Кому отправить
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully!',
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to send email.',
        });
    }
}
