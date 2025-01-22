'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import TermsTop from '@/components/TermsTop';
import TermsContent from '@/components/TermsContent';


export default function TermsOfService() {
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
            <div className="lg:bg-[url('/images/terms/terms-lg.jpg')] md:bg-[url('/images/terms/terms-md.jpg')] phone:bg-[url('/images/terms/terms-phone.jpg')] bg-[url('/images/terms/terms.jpg')] bg-bottom bg-no-repeat w-full">
                <TermsTop />
            </div>
            <div>
                <TermsContent />
            </div>
        </>
    );
}