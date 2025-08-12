import { cva, type VariantProps } from "class-variance-authority";
import React from 'react'
import { textVariants } from "./text";


export const inputTextVariants = cva(`
    border-b border-solid border-gray-200 focus:border-pink-base 
    bg-transparent outline-none   
`, {
    variants: {
        size: {
            md: "pb-2 px-2"
        },
        disabled: {
            true: "pointer-events-none"
        }
    },
    defaultVariant: {
        size: "md",
        disabled: false,
    }
});

interface InputTextProps extends VariantProps<typeof inputTextVariants>, 
Omit<React.ComponentProps<"input">, "size" | "disabled"> {}


function InputText ({
    size,
    disabled, 
    className,
    ...props
}: InputTextProps) {
    
    function cx(...classes: (string | undefined)[]): string {
        return classes.filter(Boolean).join(' ');
    }

  return <input className={cx(inputTextVariants({size, disabled}),
  textVariants(),
  className
)} 
{...props}
/>
}

export default InputText
