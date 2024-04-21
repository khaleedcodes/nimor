import { Link } from "react-router-dom";
import { WordMarkProp } from "../types/types";

function WordMark({ classes }: WordMarkProp) {
  return (
    <div className={`flex items-center justify-center ${classes}`}>
      <Link to="/" className="">
        <p className="text-2xl font-bold">
          nimor<span className="text-first-accent">.</span>
        </p>
      </Link>
    </div>
  );
}

export default WordMark;
