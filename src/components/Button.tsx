import { ButtonProp } from "../types/types";

function Button({ children }: ButtonProp) {
  return <button className="border p-3">{children}</button>;
}

export default Button;
