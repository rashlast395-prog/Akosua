"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

interface CursorContextType {
  cursorText: string;
  setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorText: "",
  setCursorText: () => {},
});

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorText, setCursorText] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSetCursorText = useCallback((text: string) => {
    setCursorText(text);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <CursorContext.Provider value={{ cursorText, setCursorText: handleSetCursorText }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
