import Bundleup from "../assets/icons/Bundleup";
import Instagram from "../assets/icons/Instagram";
import Mail from "../assets/icons/Mail";
import X from "../assets/icons/X";
import WordMark from "./WordMark";

function Footer() {
  return (
    <footer className="bg-card-bg text-white mt-14">
      <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <WordMark />
          <p className="text-sm text-white/80 leading-relaxed">
            We help brands make their mark on the web with beautiful, fast, and conversion-ready websites.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: What We Do */}
        <div>
          <h4 className="font-semibold mb-4 text-white">What We Build</h4>
          <ul className="space-y-2 text-sm">
            <li>Marketing Websites</li>
            <li>E-commerce Platforms</li>
            <li>Portfolio Sites</li>
            <li>Brand Systems</li>
          </ul>
        </div>

        {/* Column 4: Social / Newsletter */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Connect</h4>
          <div className="flex gap-4 items-center">
            <Mail />
            <X />
            <Instagram />
            <Bundleup />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 mt-6 py-6 text-center text-xs text-white/60 px-4">
        &copy; {new Date().getFullYear()} Nimor. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
