import BackIcon from "../../assets/icons/BackIcon";

function FormSubmittedPage() {
  return (
    <div className="min-h-lvh flex items-center justify-center bg-card-bg">
      <div className="bg-card-bg rounded-md p-6 flex flex-col gap-4 max-w-[460px]">
        <p className="font-bold text-first-accent text-lg">
          Thank you for getting in touch!
        </p>
        <p>
          Your submission has been received. Keep an eye on Your inbox, we'll be
          in touch in the next 24 hours.
        </p>
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

export default FormSubmittedPage;
