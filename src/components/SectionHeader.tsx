import { SectionHeaderProp } from "../types/types";
function SectionHeader({ children }: SectionHeaderProp) {
  return (
    <div>
      <h1 className="title-gradient text-5xl font-bold text-center">
        {children}
      </h1>
    </div>
  );
}

export default SectionHeader;
