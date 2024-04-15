import WordMark from "./WordMark";
import Button from "./Button";
function NavBar() {
  return (
    <div className="sticky top-0 flex justify-center bg-white z-10">
      <nav className="justify-between items-center flex p-4 w-full">
        <WordMark />
        <div className="flex items-center gap-8">
          <Button classes="pt-3 pb-3 pl-10 pr-10">Start a Project</Button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
