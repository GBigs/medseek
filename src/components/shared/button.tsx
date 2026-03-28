import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/src/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return <button className={cn("btn", `btn-${variant}`, className)} type={type} {...props} />;
}

