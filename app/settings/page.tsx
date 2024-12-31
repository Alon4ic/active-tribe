'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Settings() {
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
		<div>
			<h1>Hello from Settings</h1>
		</div>
	);
}