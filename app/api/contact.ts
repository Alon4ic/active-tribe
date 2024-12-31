import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

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
        // Отправка письма через Resend
        await resend.emails.send({
            from: 'no-reply@yourdomain.com', // Укажите ваш подтвержденный домен
            to: 'support@yourdomain.com', // Куда отправлять сообщения
            subject: `Новое сообщение от ${name}`,
            text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
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
