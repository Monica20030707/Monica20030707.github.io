import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-button-md font-medium transition-colors disabled:pointer-events-none disabled:bg-surface-soft disabled:text-mute [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-focus-ring",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary active:bg-ink-deep",
        secondary:
          "bg-canvas text-ink border border-hairline-strong active:bg-surface-soft",
        outline:
          "bg-canvas text-ink border border-hairline-strong active:bg-surface-soft",
        dark: "bg-canvas text-ink active:bg-surface-soft",
        ghost: "bg-transparent text-ink active:bg-surface-soft",
        link: "rounded-none text-ink underline underline-offset-2",
      },
      size: {
        default: "h-pill px-5 py-2",
        sm: "h-8 px-3",
        lg: "h-snippet px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
