import { ComponentPropsWithRef, ForwardedRef } from "react";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
    forwardRef?: ForwardedRef<HTMLButtonElement>;
}
export const Button = ({ children, forwardRef, ...props }: ButtonProps) => {
    return (
        <button ref={forwardRef} {...props}>
            {children}
        </button>
    )
};