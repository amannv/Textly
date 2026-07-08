"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 mx-auto flex h-14 w-full max-w-5xl items-center justify-between p-6 ">
      <span className="text-xl font-bold tracking-tight text-foreground">
        textly<span className="text-primary">.</span>
      </span>
      <ThemeToggle />
    </nav>
  );
}
