import { ArrowProp } from "../../types/types";
function Arrow({ isActive }: ArrowProp) {
  return (
    <div
      className={`transition-all duration-300 ${
        isActive ? "rotate-180" : ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M9 12.5L16 19.5L23 12.5" stroke="#464D60" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default Arrow;
