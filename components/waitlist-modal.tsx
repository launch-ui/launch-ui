"use client";

import { ArrowRightIcon } from "lucide-react";
import { useEffect } from "react";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface WaitlistModalProps {
  triggerText?: string;
  className?: string;
}

export function WaitlistModal({
  triggerText = "Dołącz do waitlisty",
  className,
}: WaitlistModalProps) {
  useEffect(() => {
    // Load ConvertKit script for the HTML form
    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector(
        'script[src="https://f.convertkit.com/ckjs/ck.5.js"]',
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="xl"
          className={`bg-brand hover:bg-brand/90 w-full cursor-pointer border-0 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl md:w-fit ${className || ""}`}
        >
          {triggerText}
          <ArrowRightIcon className="ml-2 size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Dołącz do waitlisty</DialogTitle>
          <DialogDescription>
            Zapisz się i otrzymaj dostęp do community od października
          </DialogDescription>
        </DialogHeader>

        {/* ConvertKit HTML Form */}
        <div className="py-4">
          <form
            action="https://app.kit.com/forms/8504974/subscriptions"
            className="seva-form formkit-form"
            method="post"
            data-sv-form="8504974"
            data-uid="edc9064359"
            data-format="inline"
            data-version="5"
            data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Super! Teraz sprawdź skrzynkę i potwierdź maila, żeby otrzymywać wiadomości :) ","redirect_url":"https://vibehero.pl/dzieki"},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            style={{ backgroundColor: "rgb(0, 0, 0)", borderRadius: "0px" }}
          >
            <div data-style="full">
              <div data-element="column" className="formkit-column">
                <ul
                  className="formkit-alert formkit-alert-error"
                  data-element="errors"
                  data-group="alert"
                ></ul>
                <div
                  data-element="fields"
                  className="seva-fields formkit-fields"
                >
                  <div className="formkit-field">
                    <input
                      className="formkit-input"
                      aria-label="Imię"
                      name="fields[first_name]"
                      placeholder="Imię"
                      type="text"
                      style={{
                        color: "rgb(1, 1, 1)",
                        borderColor: "rgb(0, 136, 255)",
                        borderRadius: "4px",
                        fontWeight: 400,
                      }}
                    />
                  </div>
                  <div className="formkit-field">
                    <input
                      className="formkit-input"
                      name="email_address"
                      aria-label="Email"
                      placeholder="Email"
                      required
                      type="email"
                      style={{
                        color: "rgb(1, 1, 1)",
                        borderColor: "rgb(0, 136, 255)",
                        borderRadius: "4px",
                        fontWeight: 400,
                      }}
                    />
                  </div>
                  <button
                    data-element="submit"
                    className="formkit-submit formkit-submit"
                    style={{
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(255, 34, 101)",
                      borderRadius: "4px",
                      fontWeight: 700,
                    }}
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Dołączam!</span>
                  </button>
                </div>
                <div
                  className="formkit-guarantee"
                  data-element="guarantee"
                  style={{
                    color: "rgb(234, 234, 234)",
                    fontSize: "13px",
                    fontWeight: 400,
                  }}
                >
                  <p>
                    Zapisując się do newslettera, wyrażasz zgodę na otrzymywanie
                    informacji o nowościach, promocjach, produktach i usługach
                    vibehero.pl. Administratorem Twoich danych osobowych będzie
                    Ideownik Wojciech Woźniak z siedzibą w Plac Górnośląski 21,
                    81-509 Gdynia. Twoje dane będą przetwarzane do celów
                    związanych z wysyłką newslettera
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
