"use client";

import { useState } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { Button } from "@relume_io/relume-ui";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  showPromoBanner: boolean;
};

export type Navbar1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Navbar1 = (props: Navbar1Props) => {
  const { logo, navLinks } = {
    ...Navbar1Defaults,
    ...props,
  };
  const showPromoBanner = props.showPromoBanner ?? Navbar1Defaults.showPromoBanner;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <section
      id="relume"
      className="border-border-primary fixed top-0 right-0 left-0 z-[999] flex w-full flex-col bg-white"
    >
      {showPromoBanner && (
        <div className="w-full border-b border-white/10 bg-[#050913] text-white">
          <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-2 text-center sm:gap-x-4 sm:px-[5%] sm:py-2.5">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
              <p className="text-xs font-semibold leading-tight sm:text-sm">
                ❤️‍🔥 Kurs Lovable dla designerów
              </p>
              <a
                href="https://kurslovable.pl/?utm_source=vibehero&utm_medium=top_banner&utm_campaign=vibehero_landing&utm_content=navbar_kurs_lovable"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#050913] transition-colors hover:bg-blue-primary hover:text-white sm:px-3.5 sm:py-1.5 sm:text-xs"
              >
                Sprawdź
              </a>
            </div>
            <span className="hidden h-5 w-px bg-white/30 sm:block" aria-hidden="true" />
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
              <p className="text-xs font-semibold leading-tight sm:text-sm">
                Zobaczmy się w Gdyni
              </p>
              <a
                href="https://vibeconf.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#32eca8] bg-[#32eca8] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black transition-colors hover:bg-[#29d595] sm:px-3.5 sm:py-1.5 sm:text-xs"
              >
                Vibe Conf (20 kwietnia)
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="w-full lg:px-[5%]">
        <div className="size-full lg:flex lg:items-center lg:justify-between">
          <div className="flex min-h-16 items-center justify-between px-4 md:px-[5%] md:min-h-18 lg:min-h-0 lg:px-0 lg:py-6">
            <a href={logo.url} onClick={closeMobileMenu}>
              <img src={logo.src} alt={logo.alt} className="max-h-5 md:max-h-6" />
            </a>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
          <motion.div
            variants={{
              open: {
                height: "var(--height-open, 100dvh)",
              },
              close: {
                height: "var(--height-closed, 0)",
              },
            }}
            initial="close"
            exit="close"
            animate={isMobileMenuOpen ? "open" : "close"}
            transition={{ duration: 0.4 }}
            className="overflow-hidden px-4 md:px-[5%] lg:flex lg:items-center lg:px-0 lg:py-6 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            {navLinks.map((navLink, index) =>
              navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu
                  key={index}
                  navLink={navLink}
                  isMobile={isMobile}
                  closeMobileMenu={closeMobileMenu}
                />
              ) : (
                <a
                  key={index}
                  href={navLink.url}
                  className="text-md block py-3 first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
                  onClick={closeMobileMenu}
                >
                  {navLink.title}
                </a>
              )
            )}
            <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-4 lg:flex-row">
              <a href="#pricing" className="w-full lg:w-auto" onClick={closeMobileMenu}>
                <Button className="w-full text-sm px-5 py-2 bg-primary text-white hover:bg-primary/90 rounded-[3px] border-0">
                  Dołącz do nas
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
  closeMobileMenu,
}: {
  navLink: NavLink;
  isMobile: boolean;
  closeMobileMenu: () => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="text-md flex w-full items-center justify-between gap-2 py-3 text-left lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <motion.span
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            transition={{ duration: 0.2 }}
            className="bg-background-primary lg:border-border-primary lg:absolute lg:z-50 lg:border lg:p-2 lg:[--y-close:25%]"
          >
            {navLink.subMenuLinks?.map((navLink, index) => (
              <a
                key={index}
                href={navLink.url}
                className="text-md block py-3 pl-4 md:pl-[5%] lg:px-4 lg:py-2 lg:text-base"
                onClick={closeMobileMenu}
              >
                {navLink.title}
              </a>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </div>
  );
};

export const Navbar1Defaults: Props = {
  logo: {
    url: "#",
    src: "/Vibe-hero-logo.png",
    alt: "Vibe Hero Logo",
  },
  showPromoBanner: false,
  navLinks: [
    { title: "Dlaczego Vibe Hero?", url: "#benefits" },
    { title: "Efekty", url: "#testimonials" },
    { title: "O mnie", url: "#about" },
    { title: "FAQ", url: "#faq" },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
