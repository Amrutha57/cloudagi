"use client";

import React from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatedThemeToggler } from "../components/themetoggle";
import { CloudAgiLogo } from "./logo";
import { MenuToggleIcon } from "./menu-toggle-icon";
import { Button, buttonVariants } from "./ui/button";
import { useScroll } from "@/components/smoothui/ui/use-scroll";
import { cn } from "@/app/components/ui/shadcn-io/particles/lib/utils";
import Blog from "../Blogs/page";
export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const router = useRouter();

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
     //{ label: "Blogs", href: "/contact" },
    { label: "Blogs", href: "/Blogs" },
  ];

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-transparent border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50 md:shadow",
        {
          "md:shadow-lg": scrolled,
        }
      )}
    >
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-full items-center justify-between px-6 md:px-16 lg:px-24",
          "md:h-16"
        )}
      >
        {/* Left aligned: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <CloudAgiLogo className="h-6 md:h-7" />
          </Link>
        </div>

        {/* Center or flex-grow space filler to push nav links to right side */}
        <div className="flex-grow hidden md:flex items-center justify-center">
          {/* Could be empty or add center content if needed */}
        </div>

        {/* Right aligned: Nav Links and Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              className={buttonVariants({ variant: "ghost" })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="outline" onClick={() => router.push("/signin")}>
            Sign In
          </Button>
          <Button onClick={() => router.push("/getStarted")}>Get Started</Button>

          {/* Theme toggle button added here */}
          <AnimatedThemeToggler />
        </div>

        {/* Mobile menu toggle */}
        <Button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          size="icon"
          variant="outline"
          aria-label="Toggle Menu"
        >
          <MenuToggleIcon className="size-5" duration={300} open={open} />
        </Button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu className="flex flex-col justify-between gap-2" open={open}>
        <div className="grid gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              className={buttonVariants({
                variant: "ghost",
                className: "justify-start",
              })}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button onClick={() => router.push("/signin")} variant="outline">
            Sign In
          </Button>
          <Button className="w-full" onClick={() => router.push("/get-started")}>
            Get Started
          </Button>
          <AnimatedThemeToggler />
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & { open: boolean };

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      className={cn(
        "bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50",
        "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden"
      )}
      id="mobile-menu"
    >
      <div
        className={cn(
          "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
          "size-full p-4",
          className
        )}
        data-slot={open ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
