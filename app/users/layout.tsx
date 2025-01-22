import React from 'react';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'),
    title: 'Active Tribe for Users',
    description:
        'Unlock your fitness potential with GymStation, the innovative outdoor fitness equipment rental service. Download the Active Tribe app to locate, book, and unlock GymStations near you. Elevate your workouts with high-quality equipment and personalized workout plans. Join the GymStation community today!',
    keywords:
        'GymStation, outdoor fitness equipment, fitness equipment rental, Active Tribe app, workout stations, book fitness station, unlock fitness equipment, personalized workout plans, outdoor gym, fitness journey, high-quality gym equipment, fitness app UAE, fitness companion, workout of the day',
    openGraph: {
        title: 'Active Tribe for Users',
        description:
            'Unlock your fitness potential with GymStation! Use the Active Tribe app to find, book, and unlock outdoor fitness equipment near you. With personalized workouts and high-quality gear, your fitness journey has never been easier. Download the app and start training today!',
        url: 'https://example.com',
        images: [
            {
                url: '/assets/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'GymStation by Active Tribe',
            },
        ],
    },
    authors: [
        {
            name: 'GymStation by Active Tribe',
        },
    ],
};

export default function UsersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main>{children}</main>;
}
