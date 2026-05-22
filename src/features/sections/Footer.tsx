import { Smile } from "lucide-react";
import DownloadResume from "../navigation-ui/DownloadResume";
import AOS from "aos";
import { useEffect } from "react";
import githubIcon from "../../assets/github-icon.svg";
import linkedInIcon from "../../assets/linkedin-icon.svg";
import mailIcon from "../../assets/email-icon.svg";

const socialLinks = [
  {
    icon: mailIcon,
    alt: "mail",
    link: "mailto:efuas33@gmail.com",
  },
  {
    icon: linkedInIcon,
    alt: "linkedIn",
    link: "https://www.linkedin.com/in/lawrencia-cobbina/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BPJBl40ViTtO1x5KzxrHjKg%3D%3D",
  },
  {
    icon: githubIcon,
    alt: "github",
    link: "https://github.com/EfuaS",
  },
];

export default function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <footer
      className="bg-[#020617] min-h-[30vh] lg:rounded-t-[100px]"
      data-aos="fade-up"
    >
      <div className="px-4 lg:px-32 pt-10 grid grid-cols-1 lg:grid-cols-2 pb-16 ">
        <div className="space-y-3">
          <h2 className="font-medium text-3xl text-secondary-text-color">
            Thanks for stopping by!
            <Smile
              className="animate-bounce text-amber-300 inline ml-1 md:ml-3"
              size={30}
            />
          </h2>
          <p className="lg:w-2/3 text-justify">
            I'm always open to new opportunities and collaborations. Any
            feedback on this website is also welcome. Feel free to reach out
            through any of my socials.
          </p>

          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a target="_blank" href={social.link}>
                <img src={social.icon} alt={social.alt} width={35} />
              </a>
            ))}
          </div>
        </div>
        <div className="text-end mt-10 lg:mt-0">
          <p>
           Envisioned, Designed and Developed by
            <span className="text-accent-color"> me </span>@ 2026
          </p>
          <DownloadResume />
        </div>
      </div>
    </footer>
  );
}
