"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface ChatMessage {
  text: string;
  delay?: number;
}

interface ChatMessagesProps {
  messages: ChatMessage[];
  className?: string;
  messageDelay?: number;
}

export default function ChatMessages({
  messages,
  className,
  messageDelay = 600,
}: ChatMessagesProps) {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [showTyping, setShowTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const showNextMessage = useCallback(
    (messageIndex: number) => {
      if (messageIndex >= messages.length) return;

      // Show typing indicator
      setShowTyping(true);

      setTimeout(() => {
        setShowTyping(false);
        setVisibleMessages(messageIndex + 1);

        // Show next message after delay
        const nextDelay = messages[messageIndex]?.delay || messageDelay;
        setTimeout(() => {
          showNextMessage(messageIndex + 1);
        }, nextDelay);
      }, 400); // Typing indicator duration
    },
    [messages, messageDelay],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setTimeout(() => {
            showNextMessage(0);
          }, 300);
        }
      },
      { threshold: 0.3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, showNextMessage]);

  return (
    <div ref={elementRef} className={cn("w-full max-w-none", className)}>
      {/* Messages */}
      <div className="space-y-3">
        {messages.slice(0, visibleMessages).map((message, index) => (
          <div
            key={index}
            className="animate-in slide-in-from-left-1 flex justify-start duration-700 ease-out"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="text-foreground border-border/50 bg-card/80 max-w-[85%] rounded-3xl rounded-br-md border px-5 py-4 shadow-lg backdrop-blur-sm">
              <p className="text-base leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {showTyping && (
          <div className="flex justify-start">
            <div className="border-border/50 bg-card/80 rounded-3xl rounded-br-md border px-5 py-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <div className="bg-muted-foreground/40 h-2 w-2 animate-bounce rounded-full" />
                <div className="bg-muted-foreground/40 h-2 w-2 animate-bounce rounded-full delay-75" />
                <div className="bg-muted-foreground/40 h-2 w-2 animate-bounce rounded-full delay-150" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
