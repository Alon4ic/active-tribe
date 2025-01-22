import React from 'react';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'),
    title: 'Active Tribe: Privacy Policy',
    description:
        'Explore the privacy policy of Active Tribe. Learn how we handle your data with care, ensuring security and transparency in all interactions.',
    keywords:
        'privacy policy, Active Tribe, data protection, user privacy, terms of use, data transparency, secure data handling',
    openGraph: {
        title: 'Active Tribe: Privacy Policy',
        description:
            'Discover how Active Tribe protects your privacy and ensures secure handling of personal data.',
        url: 'https://example.com/privacy-policy',
        images: [
            {
                url: '/images/policy/og-policy.jpg',
                width: 1200,
                height: 630,
                alt: 'Privacy Policy by Active Tribe',
            },
        ],
    },
};
export default function PrivatePolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main>{children}</main>;
}
