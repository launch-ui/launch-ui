import { useState } from "react";
import { X } from "lucide-react";
import { LiveForm } from "./LiveForm";

interface LiveFormModalProps {
  triggerText?: string;
  className?: string;
}

export function LiveFormModal({
  triggerText = "Zapisz się na live'a",
  className = "",
}: LiveFormModalProps) {
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
              className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-[3px] border-[3px] border-black bg-white p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="font-heading text-2xl font-bold text-black md:text-3xl">
                  Odbierz pełny webinar
                </h2>
                <p className="mt-2 text-gray-700">
                  Wpisz swój email, a otrzymasz dostęp do pełnego nagrania i
                  wszystkich materiałów.
                </p>
              </div>

              {/* Form */}
              <LiveForm />
            </div>
          </div>
        </>
      )}
    </>
  );
}
