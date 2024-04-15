import { ButtonProp } from "../types/types";

function Button({ children, classes }: ButtonProp) {
  return (
    <a href="#contact">
      <button
        className={`border transition-colors duration-300 bg-first-accent text-white rounded-md hover:bg-second-accent ${classes}`}
      >
        {children}
      </button>
    </a>
  );
}

export default Button;
