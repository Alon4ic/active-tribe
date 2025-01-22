import React from 'react';
import { AlignJustify } from 'lucide-react';

interface NavbarBurgerProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export default function NavbarBurger({ isOpen, setIsOpen }: NavbarBurgerProps) {
    return (
        <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200"
            onClick={() => setIsOpen(!isOpen)}
        >
            <AlignJustify className="h-6 w-6" />
        </button>
        
    );
}


