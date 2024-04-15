import { Link } from "react-router-dom";
import { ButtonProp } from "../types/types";

function Button({ children, classes }: ButtonProp) {
  return (
    <Link to={`https://forms.gle/2YPmyTGXvdDSJHU19`}>
      <button
        className={`border transition-colors duration-300 bg-first-accent text-white rounded-md hover:bg-second-accent ${classes}`}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
