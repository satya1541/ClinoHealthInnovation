import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <Link href="/">
            <a className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Clino Logo"
                className="h-16 w-auto"
              />
            </a>
          </Link>
        </div>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-[2]">
          <Link href="/">
            <a className="text-sm font-medium hover:text-primary transition-colors">Home</a>
          </Link>
          <Link href="/products">
            <a className="text-sm font-medium hover:text-primary transition-colors">Products</a>
          </Link>
          <Link href="/store">
            <a className="text-sm font-medium hover:text-primary transition-colors">Store</a>
          </Link>
          <Link href="/teams">
            <a className="text-sm font-medium hover:text-primary transition-colors">Teams</a>
          </Link>
          <Link href="/about">
            <a className="text-sm font-medium hover:text-primary transition-colors">About</a>
          </Link>
          <Link href="/careers">
            <a className="text-sm font-medium hover:text-primary transition-colors">Careers</a>
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <a className="text-lg font-medium">Home</a>
          </Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>
            <a className="text-lg font-medium">Products</a>
          </Link>
          <Link href="/store" onClick={() => setIsOpen(false)}>
            <a className="text-lg font-medium">Store</a>
          </Link>
          <Link href="/teams" onClick={() => setIsOpen(false)}>
            <a className="text-lg font-medium">Teams</a>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <a className="text-lg font-medium">About</a>
          </Link>
          <Link href="/careers" onClick={() => setIsOpen(false)}>
            <a className="text-lg font-medium">Careers</a>
          </Link>
        </div>
      )}
    </nav>
  );
}
