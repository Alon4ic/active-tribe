import type { Metadata } from 'next';

import './globals.css';
import Header from '@/components/Header';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Download from '@/components/Download';
import InstagramLinks from '@/components/InstagramLinks';

export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'),
    title: 'Active Tribe',
    description:
        "Revolutionize your community's health with GymStation. Our turnkey fitness solutions boost resident satisfaction, enhance property value, and promote healthier lifestyles. Join the movement for accessible fitness!",
    keywords:
        'gym in UAE, fitness center UAE, personal training UAE, group workouts UAE, weight loss programs UAE, strength training UAE, gym in Dubai, fitness center, affordable gym, modern gym equipment UAE',
    openGraph: {
        title: 'Active Tribe',
        description:
            "Join the fitness revolution with GymStation by Active Tribe. Our outdoor fitness equipment rental service offers easy access to high-quality gym gear, enhancing your community's health and wellness. Discover how GymStation can transform your fitness experience today!",
        url: 'https://example.com',
        images: [
            {
                url: '/assets/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Active Tribe - GymStation',
            },
        ],
    },
    authors: [
        {
            name: 'GymStation by Active Tribe',
        },
    ],
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body className="font-gilroy max-w-[3000px]">
                <Script
                    strategy="beforeInteractive"
                    src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}&hl=en`}
                />
                <Toaster />
                <Header />
                {children}
                <div id="contact" className="bg-white lg:mb-[100px] mb-[50px]">
                    <Contact />
                </div>
                <div className="bg-[#EEEAE2]">
                    <Download />
                </div>
                <div className="bg-[#0D0D0D]">
                    <InstagramLinks />
                </div>
                <Footer />
            </body>
        </html>
    );
}
