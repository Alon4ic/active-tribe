import React from 'react';
import type { Metadata } from 'next';
import '../globals.css';


export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'),
    title: 'Active Tribe for Provider',
    description:
        "Revolutionize your community's health with GymStation. Our turnkey fitness solutions create vibrant, active spaces, boosting resident satisfaction, enhancing property value, and fostering a healthier lifestyle. Invest in wellness and attract positive media attention.",
    keywords:
        'outdoor fitness, GymStation, fitness equipment rental, community wellness, active lifestyle, fitness solutions, property value, outdoor gym, fitness hubs, health promotion, low-maintenance fitness equipment, smart fitness technology, healthy community, fitness investment, fitness equipment for communities, promote physical activity',
    openGraph: {
        title: 'Active Tribe for Provider',
        description:
            'Transform your community with GymStation. Our outdoor fitness equipment rental service promotes active lifestyles, boosts property value, and attracts positive media attention. Invest in wellness, create vibrant spaces, and foster a healthier environment for all. Join us in revolutionizing fitness!',
        url: 'https://example.com',
        images: [
            {
                url: '/assets/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Active Tribe for Provider - GymStation',
            },
        ],
    },
};


export default function ProvidersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main>{children}</main>;
}
