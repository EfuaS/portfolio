import { useState, useEffect } from "react";
import { useScrollSpy } from "../../custom-hooks/useScrollSpy";
import { scrollToSection } from "../../utils/scrollToSection";
import { siteAssets } from "../../utils/siteAssets";
import SmartImage from "./SmartImage";

  const navItems: { label: string; path: string }[] = [
    { label: "Home", path: "home" },
    { label: "My Story", path: "my-story" },
    { label: "My Journey", path: "my-journey" },
    { label: "My Works", path: "my-works" },
  ];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navItems.map((i) => i.path));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    // Let modified clicks (new tab, new window) behave normally.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    scrollToSection(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="header-drop max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-4 flex items-center justify-between"
      >
        {/* Profile Image / Logo */}
        <div className="md:flex items-center hidden">
          <div className="size-14 rounded-full overflow-hidden border-2 border-teal-300 shadow-md hover:shadow-teal-300/50 transition-shadow duration-300">
            <SmartImage
              src={siteAssets.local.headshot}
              alt="Lawrencia Efua Cobbina"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center md:gap-6 overflow-x-auto md:overflow-hidden">
          {navItems.map((item) => {
            const isActive = activeSection === item.path;
            return (
              <li key={item.label}>
                <a
                  href={"#" + item.path}
                  onClick={(event) => handleNavClick(event, item.path)}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-nowrap ease-in-out duration-300 px-3 py-3 rounded-full hover:bg-teal-400/10 hover:text-teal-300 ${
                    isActive
                      ? "text-teal-300 font-semibold text-lg"
                      : "text-secondary-text-color font-light text-normal"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
