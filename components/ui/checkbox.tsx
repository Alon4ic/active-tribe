import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

interface CheckboxProps {
    id?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const CheckboxComponent: React.FC<CheckboxProps> = ({
    id,
    disabled,
    checked,
    onChange,
}) => {
    return (
        <Checkbox.Root
            id={id}
            className="peer flex items-center justify-center mr-[10px] font-bold h-[13px] w-[13px] mt-[3px] shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            disabled={disabled}
            checked={checked}
            onCheckedChange={onChange}
        >
            <Checkbox.Indicator className="flex items-center justify-center text-current">
                <Check className="h-[9px] w-[9px]" />
            </Checkbox.Indicator>
        </Checkbox.Root>
    );
};

export { CheckboxComponent as Checkbox };
