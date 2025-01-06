import React from 'react';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
    title: 'Active Tribe For Providers',
    description: 'Generated by create next app',
};

export default function ProvidersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main>{children}</main>;
}
