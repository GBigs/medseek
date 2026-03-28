import { cn } from "@/src/lib/cn";

type BrandWordmarkProps = {
  className?: string;
};

export function BrandWordmark({ className }: BrandWordmarkProps) {
  return (
    <span className={cn("brand-wordmark", className)}>
      <span className="brand-wordmark-med">med</span>
      <span className="brand-wordmark-seek">seek</span>
    </span>
  );
}
