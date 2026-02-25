import { useState } from "react";
import { X } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

interface WaitlistModalProps {
  triggerText?: string;
  className?: string;
}

export function WaitlistModal({
  triggerText = "Dołącz do waitlisty",
  className = "",
}: WaitlistModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`bg-primary hover:bg-primary/90 rounded-[3px] border-0 px-8 py-3 text-base font-bold text-white uppercase transition-colors ${className}`}
      >
        {triggerText}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4">
            <div
              className="relative max-h-[85vh] w-full max-w-[700px] overflow-hidden rounded-[3px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 rounded-sm opacity-70 transition-opacity hover:opacity-100"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              {/* Form */}
              <WaitlistForm />
            </div>
          </div>
        </>
      )}
    </>
  );
}
