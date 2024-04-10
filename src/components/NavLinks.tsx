import NavLink from "./NavLink";
import { LinkType } from "../../src/types/types";
function NavLinks() {
  const links: LinkType[] = [
    { type: "anchor", linkName: "Converter", link: "/#converter" },
    { type: "router", linkName: "Rates", link: "/rates" },
    { type: "router", linkName: "Bot", link: "/bot" },
  ];
  return (
    <div className="flex gap-6 max-sm:justify-center">
      {links.map(({ type, linkName, link }, index) => {
        return (
          <NavLink type={type} linkName={linkName} link={link} key={index} />
        );
      })}
    </div>
  );
}

export default NavLinks;
