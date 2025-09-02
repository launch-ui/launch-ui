import * as React from "react";

import { cn } from "@/lib/utils";

function Item({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item"
      className={cn(
        "group text-foreground border-border/50 from-background/50 to-background/20 hover:border-brand/30 hover:shadow-brand/5 relative flex flex-col gap-6 rounded-2xl border bg-gradient-to-br p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className,
      )}
      {...props}
    >
      <div className="from-brand/5 absolute inset-0 rounded-2xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex flex-col gap-6">{props.children}</div>
    </div>
  );
}

function ItemTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="item-title"
      className={cn(
        "text-lg leading-tight font-bold tracking-tight sm:text-xl lg:text-2xl",
        className,
      )}
      {...props}
    />
  );
}

function ItemDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-description"
      className={cn(
        "text-muted-foreground flex w-full flex-col gap-2 text-base leading-relaxed text-balance sm:text-lg",
        className,
      )}
      {...props}
    />
  );
}

function ItemIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-icon"
      className={cn(
        "from-brand/20 to-brand/5 border-brand/20 hover:shadow-brand/25 group relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="from-brand/10 absolute inset-0 rounded-xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="text-brand relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <div className="flex h-6 w-6 items-center justify-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export { Item, ItemDescription, ItemIcon, ItemTitle };
