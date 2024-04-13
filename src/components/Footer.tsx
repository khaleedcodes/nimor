import Bundleup from "../assets/icons/Bundleup";
import Instagram from "../assets/icons/Instagram";
import Mail from "../assets/icons/Mail";
import X from "../assets/icons/X";
import WordMark from "./WordMark";
function Footer() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full pr-4 pl-4 pt-10 pb-10 flex justify-between items-center gap-10 border-t mt-12">
        <div>
          <WordMark />
        </div>
        <div className="flex gap-3">
          <Mail />
          <X />
          <Instagram />
          <Bundleup />
        </div>
      </div>
    </div>
  );
}

export default Footer;
