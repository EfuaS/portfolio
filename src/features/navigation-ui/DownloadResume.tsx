import { Download } from "lucide-react";
import { siteAssets } from "../../utils/siteAssets";

/** Filename the visitor gets, independent of how the file is stored. */
const SAVE_AS = "Lawrencia-Efua-Cobbina-Resume.pdf";

export default function DownloadResume() {
  return (
    <a
      href={siteAssets.local.resume}
      download={SAVE_AS}
      className="my-4 max-w-52 inline-block text-indigo-400 border-2 hover:cursor-pointer hover:scale-105 hover:bg-accent-color/5 ease-in-out duration-300 border-indigo-400 p-2 rounded-tl-2xl rounded-br-2xl"
    >
      Download Resume
      <Download className="inline ml-2 mb-0.5" size={18} />
    </a>
  );
}
