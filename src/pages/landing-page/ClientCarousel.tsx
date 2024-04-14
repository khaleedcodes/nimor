import BundleupWordMark from "../../components/BundleupWordMark";
import NairaupdatesngWordMark from "../../components/NairaupdatesngWordMark";
import QuizwaveWordMark from "../../components/QuizwaveWordMark";

function ClientCarousel() {
  return (
    <div className="w-full p-4 flex justify-center items-center ">
      <NairaupdatesngWordMark />
      <span className="text-2xl font-bold text-first-accent">·</span>
      <BundleupWordMark />
      <span className="text-2xl font-bold text-first-accent">·</span>
      <QuizwaveWordMark />
    </div>
  );
}

export default ClientCarousel;
