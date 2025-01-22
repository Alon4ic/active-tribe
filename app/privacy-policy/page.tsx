'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PolicyTop from '../../components/PolicyTop';
import PolicyContent from '../../components/PolicyContent';

export default function PrivacyPolicy() {
    const pathname = usePathname();

    useEffect(() => {
        const storedPages = localStorage.getItem('visitedPages');
        const visitedPages = storedPages ? JSON.parse(storedPages) : [];

        if (!visitedPages.includes(pathname)) {
            visitedPages.push(pathname);
            localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
        }
    }, [pathname]);

    return (
        <>
                    <div className="lg:bg-[url('/images/policy/policy-lg.jpg')] md:bg-[url('/images/policy/policy-md.jpg')] phone:bg-[url('/images/policy/policy-phone.jpg')] bg-[url('/images/policy/policy.jpg')] bg-bottom bg-no-repeat w-full">
                        <PolicyTop />
                    </div>
                    <div>
                        <PolicyContent />
                    </div>
                </>
    );
}
