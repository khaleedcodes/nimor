import { WebsiteType } from "../../types/types";
import WebsiteItem from "./WebsiteItem";

const websites: WebsiteType[] = [
  { websiteTypeName: "Landing Page" },
  { websiteTypeName: "Portfolio" },
  { websiteTypeName: "Food/Culinary" },
  { websiteTypeName: "Personal" },
  { websiteTypeName: "Educational" },
  { websiteTypeName: "Event" },
  { websiteTypeName: "Non-profit" },
  { websiteTypeName: "Marketing" },
  { websiteTypeName: "Real Estate" },
  { websiteTypeName: "Photography" },
  { websiteTypeName: "Review" },
  { websiteTypeName: "Travel/Tourism" },
  { websiteTypeName: "Multi-page Website" },
  { websiteTypeName: "Web3/NFT/Crypto" },
  { websiteTypeName: "Beauty & Fashion" },
  { websiteTypeName: "Health & Fitness" },
  { websiteTypeName: "Professional Services" },
  { websiteTypeName: "And more custom websites..." },
];

function WebsiteList() {
  return (
    <div className="flex gap-2 flex-wrap">
      {websites.map(({ websiteTypeName }) => {
        return <WebsiteItem websiteTypeName={websiteTypeName} />;
      })}
    </div>
  );
}

export default WebsiteList;
