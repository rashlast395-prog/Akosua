"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

interface LoaderContextType {
  isLoading: boolean;
  hideLoader: () => void;
}

const LoaderContext = createContext<LoaderContextType>({
  isLoading: true,
  hideLoader: () => {},
});

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const LOADER_FALLBACK_MS = 3200;
    let done = false;

    const hide = () => {
      if (done) return;
      done = true;
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setTimeout(hide, 250);
    } else {
      window.addEventListener("load", () => setTimeout(hide, 250), {
        once: true,
      });
    }
    setTimeout(hide, LOADER_FALLBACK_MS);

    window.addEventListener("error", () => hide(), true);
    window.addEventListener("unhandledrejection", () => hide());

    return () => {
      window.removeEventListener("error", () => hide(), true);
      window.removeEventListener("unhandledrejection", () => hide());
    };
  }, [mounted]);

  const hideLoader = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (!mounted) {
    return (
      <div
        id="loader"
        className="fixed inset-0 z-[100000] flex items-center justify-center bg-white dark:bg-zinc-950"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-4">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            className="opacity-90"
          >
            <circle
              cx="26"
              cy="26"
              r="22"
              stroke="#e5e5e5"
              strokeWidth="3"
            />
            <path
              d="M26 4a22 22 0 0 1 16 7"
              stroke="#FF6B2B"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <div
            className="h-[2px] w-[120px] overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800"
            style={{ position: "relative" }}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-accent"
              style={{
                width: "100%",
                animation: "loaderFill 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <LoaderContext.Provider value={{ isLoading, hideLoader }}>
      {isLoading && (
        <div
          id="loader"
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-white dark:bg-zinc-950 transition-opacity duration-500"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-4">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              className="opacity-90"
            >
              <circle
                cx="26"
                cy="26"
                r="22"
                stroke="#e5e5e5"
                strokeWidth="3"
              />
              <path
                d="M26 4a22 22 0 0 1 16 7"
                stroke="#FF6B2B"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <div
              className="h-[2px] w-[120px] overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800"
              style={{ position: "relative" }}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-accent"
                style={{
                  width: "100%",
                  animation:
                    "loaderFill 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                }}
              />
            </div>
          </div>
        </div>
      )}
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}
