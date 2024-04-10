import WordMark from "./WordMark";
// import NavLinks from "./NavLinks";
import Button from "./Button";
function NavBar() {
  return (
    <div className="sticky top-0 flex justify-center bg-white max-sm:hidden ">
      <nav className="justify-between items-center flex p-4 max-w-screen-xl w-full">
        <WordMark />
        <div className="flex items-center gap-8">
          <Button>Start a Project</Button>
          {/* <NavLinks /> */}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
