import { Link } from "react-router-dom";

function WordMark() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/" className="">
        <p className=" text-primary-green text-2xl font-bold">nimor.</p>
      </Link>
    </div>
  );
}

export default WordMark;
