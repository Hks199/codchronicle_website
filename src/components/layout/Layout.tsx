import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingSocialLinks from "../common/FloatingSocialLinks";
export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const previous = useRef(pathname);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (previous.current !== pathname)
      document.getElementById("main-content")?.focus({ preventScroll: true });
    previous.current = pathname;
  }, [pathname]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <FloatingSocialLinks />
    </>
  );
}
