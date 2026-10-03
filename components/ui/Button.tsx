import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text" | "light" | "white-outline";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link className={`button button--${variant} ${className}`.trim()} href={href}>
      {children}
      {variant === "text" && <span aria-hidden="true">→</span>}
    </Link>
  );
}

export type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "white-outline";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`.trim()}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
