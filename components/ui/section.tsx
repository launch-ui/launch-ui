import * as React from "react";

import { cn } from "@/lib/utils";

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn(
        "bg-background text-foreground relative px-4 py-16 sm:py-20 md:py-24 lg:py-32",
        className,
      )}
      {...props}
    />
  );
}

export { Section };
