import { cva, type VariantProps } from "class-variance-authority";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "./badge";
import { Button } from "./button";

const pricingColumnVariants = cva(
  "max-w-container relative flex flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl",
  {
    variants: {
      variant: {
        default: "glass-1 to-transparent dark:glass-3",
        glow: "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
        "glow-brand":
          "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface PricingColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingColumnVariants> {
  name: string;
  icon?: ReactNode;
  description: string;
  price: number;
  showDiscounts?: boolean;
  originalPrice?: number;
  discountCode?: string;
  priceNote: string;
  cta: {
    variant: "glow" | "default";
    label: string;
    href: string;
  };
  features: string[];
}

export function PricingColumn({
  name,
  icon,
  description,
  price,
  showDiscounts = false,
  originalPrice,
  discountCode,
  priceNote,
  cta,
  features,
  variant,
  className,
  ...props
}: PricingColumnProps) {
  const discountPercentage =
    originalPrice && price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  return (
    <div
      className={cn(pricingColumnVariants({ variant, className }))}
      {...props}
    >
      <hr
        className={cn(
          "via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent",
          variant === "glow-brand" && "via-brand",
        )}
      />
      <div className="flex flex-col gap-7">
        <header className="flex flex-col gap-2">
          <h2 className="flex items-center gap-2 font-bold">
            {icon && (
              <div className="text-muted-foreground flex items-center gap-2">
                {icon}
              </div>
            )}
            {name}
          </h2>
          <p className="text-muted-foreground max-w-[220px] text-sm">
            {description}
          </p>
        </header>
        <section className="flex flex-col gap-3">
          {showDiscounts && (
            <div className="flex h-6 items-baseline gap-1">
              {originalPrice && (
                <span className="text-muted-foreground text-lg font-medium line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
          )}
          <div className="flex items-center gap-3 lg:flex-col lg:items-start xl:flex-row xl:items-center">
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <span className="text-muted-foreground text-2xl font-bold">
                  $
                </span>
                <span className="text-6xl font-bold">{price}</span>
              </div>
            </div>
            <div className="flex min-h-[40px] flex-col">
              {price > 0 && (
                <>
                  <span className="text-sm">one-time payment</span>
                  <span className="text-muted-foreground text-sm">
                    plus local taxes
                  </span>
                </>
              )}
            </div>
          </div>
          {showDiscounts && (
            <div className="h-6">
              {discountCode && (
                <p className="text-brand-foreground text-sm font-medium">
                  {discountPercentage}% off with code{" "}
                  <Badge variant="brand-secondary">{discountCode}</Badge>
                </p>
              )}
            </div>
          )}
        </section>
        <Button variant={cta.variant} size="lg" asChild>
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
        <p className="text-muted-foreground min-h-[40px] max-w-[220px] text-sm">
          {priceNote}
        </p>
        <hr className="border-input" />
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <CircleCheckBig className="text-muted-foreground size-4 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { pricingColumnVariants };
