"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Github } from "@/lib/githubIcon";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 py-3 md:p-6 ">
      <span className="text-xl font-bold tracking-tight text-foreground">
        textly<span className="text-primary">.</span>
      </span>
      <div className="flex items-center gap-1">
        <a
          href="https://github.com/amannv/Textly"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-foreground/80 hover:text-foreground"
          >
            <Github />
            <span className="hidden sm:inline text-xs font-medium">Star</span>
            <Star className="h-3 w-3 fill-current" />
          </Button>
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
