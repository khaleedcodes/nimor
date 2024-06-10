import Bundleup from "../assets/icons/Bundleup";
import Instagram from "../assets/icons/Instagram";
import Mail from "../assets/icons/Mail";
import X from "../assets/icons/X";
import WordMark from "./WordMark";
function Footer() {
  return (
    <div className="flex justify-center bg-card-bg mt-14">
      <div className="max-w-screen-xl w-full pr-4 pl-4 pt-10 pb-10 flex justify-between items-center gap-1">
        <div>
          <WordMark classes="text-white" />
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
