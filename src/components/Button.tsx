import { ButtonProp } from "../types/types";

function Button({ children }: ButtonProp) {
  return (
    <button className="border pt-3 pb-3 pl-10 pr-10 transition-colors duration-300 bg-first-accent text-white rounded-md hover:bg-second-accent">
      {children}
    </button>
  );
}

export default Button;
