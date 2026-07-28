"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

type DeadLinkProps = ComponentPropsWithoutRef<"a">;

/** Looks like a link/button but never navigates away from the page. */
export function DeadLink({
  className,
  onClick,
  href = "#",
  children,
  ...props
}: DeadLinkProps) {
  const block = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClick?.(event);
  };

  return (
    <a
      href={href}
      className={cn(className)}
      onClick={block}
      onAuxClick={block}
      role="link"
      aria-disabled="true"
      {...props}
    >
      {children}
    </a>
  );
}
