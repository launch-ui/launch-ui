import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const beamVariants = cva(
  "relative after:content-[''] after:absolute after:inset-0 after:rounded-full after:scale-200",
  {
    variants: {
      tone: {
        default:
          "after:bg-radial after:from-foreground/30 after:from-10% after:to-foreground/0 after:to-60%",
        brand:
          "after:bg-radial after:from-brand/10 dark:after:from-brand/30 after:from-10% after:to-brand/0 after:to-60%",
        brandLight:
          "after:bg-radial dark:after:from-brand-foreground/30 after:from-brand-foreground/10 after:from-10% after:to-brand-foreground/0 after:to-60%",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  },
);

export interface BeamProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof beamVariants> {}

function Beam({ className, tone, ...props }: BeamProps) {
  return (
    <div
      data-slot="beam"
      className={cn(beamVariants({ tone, className }))}
      {...props}
    />
  );
}

export { Beam, beamVariants };
