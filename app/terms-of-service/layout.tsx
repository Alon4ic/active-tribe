import React from 'react';
import type { Metadata } from 'next';
import '../globals.css';



export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'),
    title: 'Active Tribe: Terms and Conditions for GymStation Providers',
    description:
        'Read the terms and conditions for using GymStation by Active Tribe. Learn about registration, rental agreements, and the use of equipment provided by business customers of Active Tribe.',
    keywords:
        'Active Tribe, GymStation, terms and conditions, fitness equipment rental, gym equipment UAE, outdoor fitness, registration process, rental agreements, community wellness, fitness solutions, business customer agreements, sports equipment rental, UAE fitness services, smart fitness technology',
    openGraph: {
        title: 'Active Tribe: Terms and Conditions for GymStation Providers',
        description:
            'Explore the terms and conditions for using GymStation. Understand the registration, rental agreements, and the use of sports equipment provided by Active Tribe.',
        url: 'https://example.com/terms-and-conditions',
        images: [
            {
                url: '/assets/images/og-image-terms.jpg',
                width: 1200,
                height: 630,
                alt: 'Terms and Conditions for GymStation by Active Tribe',
            },
        ],
    },
    authors: [
        {
            name: 'Active Tribe Team',
        },
    ],
};


export default function TermsOfServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main>{children}</main>;
}
