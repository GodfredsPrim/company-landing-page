import { useState } from "react";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["What We Do", "#what-we-do"],
  ["Products", "#products"],
  ["Team", "#team"],
  ["Contact", "#contact"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="SOLVXIT-GH home">
          <span className="brand-mark" aria-hidden="true">
            SX
          </span>
          <span className="brand-name">SOLVXIT-GH</span>
        </a>

        <div className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>

        <a className="button button-small nav-cta" href="#contact">
          Work With Us
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Cross2Icon width={24} height={24} /> : <HamburgerMenuIcon width={24} height={24} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={open ? "mobile-nav open" : "mobile-nav"}
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="button" href="#contact" onClick={() => setOpen(false)}>
          Work With Us
        </a>
      </div>
    </header>
  );
}
