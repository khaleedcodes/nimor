import QuestionMark from "../../assets/icons/QuestionMark";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const navigate = useNavigate();
  return (
    <div
      className="basis-[422px] grow flex rounded-md flex-col justify-start items-center gap-8"
      id="contact"
    >
      <div className="flex flex-col items-center gap-2 bg-[rgb(96,76,199,0.03)] p-4 w-full rounded-md">
        <div className="flex">
          <QuestionMark />
          <QuestionMark />
          <QuestionMark />
        </div>
        <h1 className="text-first-accent font-bold text-2xl text-center">
          More Questions? Reach out!!
        </h1>
      </div>
      <form
        name="contact"
        className="flex flex-col gap-4 w-full items-center "
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/submitted");
          console.log("submitted");
        }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          className="min-h-12 rounded-md p-4 focus:outline-none w-full bg-[rgb(96,76,199,0.03)]"
        />
        <input
          type="email"
          placeholder="Email address"
          name="email"
          required
          className="min-h-12 rounded-md p-4 focus:outline-none w-full bg-[rgb(96,76,199,0.03)]"
        />
        <input
          type="text"
          placeholder="subject"
          name="subject"
          required
          className="min-h-12 rounded-md p-4 focus:outline-none w-full bg-[rgb(96,76,199,0.03)]"
        />
        <textarea
          placeholder="Message"
          name="message"
          required
          className="rounded-md p-4 focus:outline-none w-full min-h-48 bg-[rgb(96,76,199,0.03)]"
        ></textarea>
        <button
          className={`border transition-colors duration-300 bg-first-accent text-white rounded-md hover:bg-second-accent pt-3 pb-3 pl-10 pr-10`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
