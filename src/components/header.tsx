"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Menu, Handshake, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { portfolioData } from "@/lib/data";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const navItems = [
    { name: "Projects", href: "/#projects", sectionId: "projects" },
    { name: "About", href: "/#about", sectionId: "about" },
    { name: "Skills", href: "/#skills", sectionId: "skills" },
    { name: "Capabilities", href: "/#capabilities", sectionId: "capabilities" },
    { name: "Journey", href: "/#experience", sectionId: "experience" },
    { name: "Collaborate", href: "/#collaborate", sectionId: "collaborate" },
    { name: "Contact", href: "/contact", sectionId: "" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only track active sections on home page
      if (pathname === "/") {
        const sections = [
          "home",
          "projects",
          "about",
          "skills",
          "capabilities",
          "experience",
          "certificates",
          "collaborate",
        ];
        const scrollPosition = window.scrollY + 120;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setSheetOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? "border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm"
          : "border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="p-1.5 rounded-md bg-primary text-primary-foreground">
            <Code2 className="h-4 w-4" />
          </div>
          <span className="font-headline font-bold text-foreground">
            {portfolioData.student.handle}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const isActive =
              item.href === "/contact"
                ? pathname === "/contact"
                : pathname === "/" && activeSection === item.sectionId;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`font-medium transition-colors hover:text-foreground relative py-1 ${
                  isActive ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Collaborate CTA */}
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-medium active:scale-[0.98] transition-all"
          >
            <Link href="/#collaborate">
              <Handshake className="w-3.5 h-3.5 mr-1.5" />
              Collaborate
            </Link>
          </Button>

          {/* Quick Contact Email */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden xl:inline-flex text-xs h-9 px-3 border-border hover:bg-secondary"
          >
            <a href={`mailto:${portfolioData.student.email}`}>
              <Mail className="w-3.5 h-3.5 mr-1.5 text-primary" />
              Get in Touch
            </a>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden h-9 w-9 border-border"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between">
              <div>
                <SheetHeader className="text-left pb-6 border-b border-border">
                  <SheetTitle className="flex items-center gap-2 text-lg font-bold font-headline">
                    <div className="p-1.5 rounded-md bg-primary text-primary-foreground">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <span>{portfolioData.student.name}</span>
                  </SheetTitle>
                  <p className="text-xs text-muted-foreground">
                    {portfolioData.student.title}
                  </p>
                </SheetHeader>

                <nav className="grid gap-2 text-base font-medium mt-6">
                  {navItems.map((item) => {
                    const isActive =
                      item.href === "/contact"
                        ? pathname === "/contact"
                        : pathname === "/" && activeSection === item.sectionId;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-md transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        <span>{item.name}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Sheet Footer */}
              <div className="pt-6 border-t border-border space-y-4">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setSheetOpen(false)}
                >
                  <Link href="/#collaborate">
                    <Handshake className="w-4 h-4 mr-2" />
                    Collaborate With Me
                  </Link>
                </Button>

                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>Satara, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    <a
                      href={`mailto:${portfolioData.student.email}`}
                      className="hover:underline text-foreground"
                    >
                      {portfolioData.student.email}
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
