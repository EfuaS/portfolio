import Typewriter from "typewriter-effect";
import SmartImage from "../navigation-ui/SmartImage";
import { siteAssets } from "../../utils/siteAssets";
import AOS from "aos";
import { useEffect } from "react";
import DownloadResume from "../navigation-ui/DownloadResume";

function HeadShotImg({ eager = false }: { eager?: boolean }) {
  return (
    <SmartImage
      src={siteAssets.local.headshot}
      alt="Lawrencia Efua Cobbina"
      loading={eager ? "eager" : "lazy"}
      className="w-full h-full object-cover"
    />
  );
}

export function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="home" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:h-[80vh] grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Mobile view smaller image */}
        <div className="size-80 m-auto block mb-4 md:hidden rounded-full shadow-xl overflow-hidden">
          <HeadShotImg />
        </div>

        {/* Tablet view medium sized image */}
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="hidden md:flex lg:hidden items-center justify-center mb-6"
        >
          <div className="size-1/2 rounded-full shadow-xl overflow-hidden">
            <HeadShotImg />
          </div>
        </div>

        {/* Left Side - Content */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-col justify-center space-y-6"
        >
          {/* Open to Work Badge */}
          <span className="px-4 py-2 w-fit bg-teal-900/50 text-teal-300 rounded-full text-xs font-medium animate-bounce">
            Open to work
          </span>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-secondary-text-color!">
            Lawrencia Efua Cobbina
          </h1>

          {/* Rotating job title. Not a heading — the page has one h1 (the name).
              text-accent-color replaces the colour the global h1 rule used to give it. */}
          <p className="text-xl text-accent-color">
            {/* Typewritter effect */}
            <Typewriter
              options={{
                strings: [
                  "Frontend Engineer",
                  "Microsoft Azure Developer Associate",
                  "Meta Certified",
                  "Microsoft Certified",
                  "In Progress Backend Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

          {/* Description */}
          <p className="text-md max-w-lg leading-relaxed">
            <b>Hi there! Welcome to my little corner of the internet.</b> <br />
            By day, I’m a frontend engineer who loves crafting beautiful,
            smooth, and awesome web experiences. By night? You’ll usually find
            me lost in a video game, painting portraits, or jamming out to
            music. (And yes, three cheers if you’re a Swiftie too!)
            <br />
            Grab a coffee, look around, and make yourself at home.
          </p>

          {/* Metrics */}
          <div className="flex gap-8 pt-4">
            {[
              { label: "Experience", metric: "4 yrs" },
              { label: "Projects", metric: "7+" },
              { label: "Certifications", metric: "2" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl text-teal-400 text-center font-bold ">
                  {stat.metric}
                </p>
                <p className="text-sm  mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <DownloadResume />
        </div>

        {/* Right Side - Image Frame */}
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="hidden lg:flex items-center justify-center h-[95%] "
        >
          <div className="size-full rounded-3xl shadow-xl overflow-hidden">
            <HeadShotImg eager />
          </div>
        </div>
      </div>
    </section>
  );
}
