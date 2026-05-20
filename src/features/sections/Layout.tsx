/* Generated with Copilot — reviewed */
import { Header } from "../navigation-ui/Header";
import "aos/dist/aos.css";
import { Home } from "./Home";
import { About } from "./About";
import { Works } from "./Works";
import { Education } from "./Education";
import Footer from "./Footer";
import CursorGlow from "../navigation-ui/CursorGlow";

export function Layout() {
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
