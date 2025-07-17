import { ButtonProp } from "../types/types";

function Button({ children, className }: ButtonProp) {
  return (
    <>
      <button
        className={`transition-colors duration-300 bg-first-accent text-white rounded-md hover:bg-second-accent ${className}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
