import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'border-0 border-b border-gray-400 bg-transparent focus:ring-0 focus:outline-none placeholder-shown:bg-transparent valid:bg-transparent autofill:bg-transparent autofill:border-transparent',
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input };