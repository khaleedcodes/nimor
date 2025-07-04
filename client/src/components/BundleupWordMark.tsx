import { Link } from "react-router-dom";

function BundleupWordMark() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/" className="flex items-center">
        <p className=" text-[#1E93ff] text-2xl font-bold">
          Bundle<span className="text-[#024493]">up</span>
        </p>
      </Link>
    </div>
  );
}

export default BundleupWordMark;
