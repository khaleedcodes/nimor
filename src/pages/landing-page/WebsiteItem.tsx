import { WebsiteItemProp } from "../../types/types";

function WebsiteItem({ websiteTypeName }: WebsiteItemProp) {
  return (
    <div className="p-4 border basis-80 grow rounded-md">
      <p>{websiteTypeName}</p>
    </div>
  );
}

export default WebsiteItem;
