import { Testimonial } from "@/types/types";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-80 max-w-[90vw] bg-[#140f28] border-gray-800/50 rounded-2xl p-6 shadow-lg overflow-hidden">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-[#604cc7] opacity-60"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Testimonial Text */}
      <p className="text-white text-sm leading-relaxed mb-6 break-words max-w-full">
        {testimonial.text}
      </p>

      {/* Author Info */}
      <div className="flex items-center">
        {/* <img
          src={testimonial.avatar}
          alt={`${testimonial.author}'s photo`}
          className="w-10 h-10 rounded-full object-cover mr-3"
        /> */}
        <div>
          <div className=" text-gray-400 font-semibold text-sm">
            {testimonial.author}
          </div>
          <div className="text-gray-400 text-xs">
            {testimonial.position} of {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
