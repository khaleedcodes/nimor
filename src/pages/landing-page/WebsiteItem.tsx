import { WebsiteItemProp } from "../../types/types";

function WebsiteItem({ websiteTypeName }: WebsiteItemProp) {
  return (
    <div className="p-4 basis-80 grow rounded-md text-first-accent bg-[rgb(96,76,199,0.1)]">
      <p>{websiteTypeName}</p>
    </div>
  );
}

export default WebsiteItem;
