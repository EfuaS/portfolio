/* Generated with Copilot — reviewed */
import { Header } from "../navigation-ui/Header";
import "aos/dist/aos.css";
import { Home } from "./Home";
import { About } from "./About";
import { Works } from "./Works";
import { Education } from "./Education";
import Footer from "./Footer";
import CursorGlow from "../navigation-ui/CursorGlow";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Layout() {
  /*
   * ScrollTrigger takes its measurements as triggers are created, but web
   * fonts and the preloaded headshot can still change layout after that. The
   * pinned sections size their scroll distance from the content width, so a
   * measurement taken too early leaves the horizontal timeline short and the
   * last card clipped. Re-measure once the page has actually settled.
   */
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <div className="min-h-screen relative">
      <CursorGlow />
      <Header />
      <main className="space-y-32 md:space-y-24">
        <Home />
        <About />
        <Education />
        <Works />
      </main>
      <Footer />
    </div>
  );
}
