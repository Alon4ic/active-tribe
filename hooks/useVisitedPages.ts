import { useState, useEffect } from 'react';

export const useVisitedPages = () => {
    const [visitedPages, setVisitedPages] = useState<string[]>([]);

    useEffect(() => {
        const storedPages = localStorage.getItem('visitedPages');
        if (storedPages) {
            setVisitedPages(JSON.parse(storedPages));
        }
    }, []);

    const checkVisitedPages = (pages: string[]) => {
        return pages.every((page) => visitedPages.includes(page));
    };

    return checkVisitedPages;
};
