"use client";

import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { LiveForm } from "./live-form";

interface LiveFormModalProps {
  triggerText?: string;
  className?: string;
}

export function LiveFormModal({
  triggerText = "Zapisz się na live'a",
  className,
}: LiveFormModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="xl"
          className={cn("w-full md:w-fit", className)}
        >
          {triggerText}
          <ArrowRightIcon className="ml-2 size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-[720px]">
        <DialogHeader>
          <DialogTitle>Zapisz się na Live</DialogTitle>
          <DialogDescription>
            Wpisz swój email, a wyślę Ci link do wydarzenia.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <LiveForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
