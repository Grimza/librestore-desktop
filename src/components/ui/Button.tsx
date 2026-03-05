import { forwardRef, type ReactNode } from "react";
import "./Button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const baseStyles = "button_base_style";

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { children, className = "", ...props },
  ref,
) {
  return (
    <button ref={ref} className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
});

export default Button;
