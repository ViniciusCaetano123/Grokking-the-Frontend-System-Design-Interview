"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        document.documentElement.dataset.theme = stored;
        return;
      }
    } catch {
      // ignore
    }

    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") {
      setTheme(current);
      return;
    }

    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(prefersDark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);

    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore
    }

    document.documentElement.dataset.theme = next;
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-black shadow-sm dark:border-white/15 dark:bg-black dark:text-white"
    >
      {theme === "dark" ? "Modo escuro" : "Modo claro"}
    </button>
  );
}
