import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface FlipLinkProps extends PropsWithChildren<LinkProps> {
  className?: string;
}

export default function FlipLink({
  children,
  className,
  href,
  ...props
}: FlipLinkProps) {
  return (
    <Link href={href} className={cn("group relative", className)} {...props}>
      <span className="relative inline-flex overflow-hidden">
        <div className="translate-y-0 skew-y-0 transition duration-500 ease-smooth group-hover:-translate-y-[120%] group-hover:skew-y-[24deg] group-hover:opacity-0">
          {children}
        </div>
        <div className="absolute translate-y-[120%] skew-y-[24deg] opacity-0 transition duration-500 ease-smooth group-hover:translate-y-0 group-hover:skew-y-0 group-hover:opacity-100">
          {children}
        </div>
      </span>
    </Link>
  );
}
