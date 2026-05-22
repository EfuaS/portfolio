import { useState, useEffect } from "react";
import AOS from "aos";
import { useScrollSpy } from "../../custom-hooks/useScrollSpy";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        data-aos="fade-down"
        data-aos-duration="1000"
        className="max-w-7xl mx-auto py-4 flex items-center justify-between"
      >
        {/* Profile Image / Logo */}
        <div className="md:flex items-center hidden">
          <div className="size-14 rounded-full overflow-hidden border-2 border-teal-300 shadow-md hover:shadow-teal-300/50 transition-shadow duration-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/efuas-portfolio-website.firebasestorage.app/o/assets%2Fheadshot.webp?alt=media&token=aafc8028-8231-4db9-a1eb-b02d499f6bf6"
              alt="headShot"
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
                  className={`text-nowrap ease-in-out duration-300 px-3 py-1.5 rounded-full hover:bg-teal-400/10 hover:text-teal-300 ${
                    isActive
                      ? "text-teal-300 font-semibold text-lg animate-pulse"
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
