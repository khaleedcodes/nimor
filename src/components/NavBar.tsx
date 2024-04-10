import WordMark from "./WordMark";
import Button from "./Button";
function NavBar() {
  return (
    <div className="sticky top-0 flex justify-center bg-white">
      <nav className="justify-between items-center flex p-4 w-full">
        <WordMark />
        <div className="flex items-center gap-8">
          <Button>Start a Project</Button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
