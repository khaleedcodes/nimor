import BackIcon from "../../assets/icons/BackIcon";
function ErrorPage() {
  return (
    <div className="min-h-lvh flex items-center justify-center bg-black gap-4">
      <div>
        <p className="text-white text-5xl font-bold border-r pr-4">404</p>
      </div>
      <div className="flex flex-col justify-start">
        <p className=" text-white  font-bold">Resource not found</p>
        <a
          href="/"
          className=" flex  items-center justify-center gap-2 max-w-max text-first-accent duration-300 transition-all border-b border-b-transparent hover:border-b-first-accent"
        >
          <BackIcon />
          Back to our site
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;