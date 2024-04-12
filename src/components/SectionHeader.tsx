import { SectionHeaderProp } from "../types/types";
function SectionHeader({ children }: SectionHeaderProp) {
  return (
    <div>
      <h1 className="title-gradient text-5xl font-bold">{children}</h1>
    </div>
  );
}

export default SectionHeader;
