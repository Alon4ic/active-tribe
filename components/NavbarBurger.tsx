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

// import React from 'react';
// import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
// import { AlignJustify } from 'lucide-react';
// import NavbarLinks from './NavbarLinks';
// import { DialogTitle } from '@/components/ui/dialog';
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
// import ButtonNav from './ButtonNav';

// export default function NavbarBurger() {
//     return (
//         <Sheet>
//             <SheetTrigger asChild>
//                 <button className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
//                     <AlignJustify className="h-6 w-6" />
//                 </button>
//             </SheetTrigger>

//             <SheetContent
//                 side="left"
//                 className="fixed inset-0 w-full bg-gray-900 bg-opacity-75 z-50 flex flex-col items-start space-y-4 p-6"
//             >
//                 <VisuallyHidden>
//                     <DialogTitle>Menu</DialogTitle>
//                 </VisuallyHidden>
//                 <NavbarLinks isVertical={true} />
//                 <div className="flex sm:hidden">
//                     <ButtonNav />
//                 </div>
//             </SheetContent>
//         </Sheet>
//     );
// }
