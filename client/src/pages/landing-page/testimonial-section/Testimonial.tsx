import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Testimonial {
  id: string;
  text: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    author: "Gabrielle Williams",
    position: "CEO and Co-founder",
    company: "ABC Company",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "2",
    text: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    author: "Samantha Johnson",
    position: "CEO and Co-founder",
    company: "ABC Company",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "3",
    text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    author: "Isabella Rodriguez",
    position: "CEO and Co-founder",
    company: "ABC Company",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "4",
    text: "Creative minds behind stunning visuals that elevate our brand - an agency that delivers exceptional results.",
    author: "Michael Thompson",
    position: "CEO and Co-founder",
    company: "ABC Company",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "5",
    text: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    author: "John Peter",
    position: "CEO and Co-founder",
    company: "ABC Company",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "6",
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
    author: "Natalie Martinez",
    position: "CEO and Co-founder",
    company: "ABC Company",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "7",
    text: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    author: "Victoria Thompson",
    position: "CEO and Co-founder",
    company: "ABC Company",
    avatar:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "8",
    text: "Outstanding creative solutions that transformed our brand identity - an agency that truly understands visual storytelling.",
    author: "David Wilson",
    position: "CEO and Co-founder",
    company: "ABC Company",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials = defaultTestimonials,
  className = "",
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Split testimonials into two rows
  const topRowTestimonials = testimonials.slice(
    0,
    Math.ceil(testimonials.length / 2)
  );
  // const bottomRowTestimonials = testimonials.slice(
  //   Math.ceil(testimonials.length / 2)
  // );

  // Duplicate testimonials for infinite scroll
  const duplicatedTopRow = [...topRowTestimonials, ...topRowTestimonials];
  // const duplicatedBottomRow = [
  //   ...bottomRowTestimonials,
  //   ...bottomRowTestimonials,
  // ];

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-[rgb(96,76,199,0.2)] rounded-xl mx-2 relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Rating Badge */}
          <motion.div
            className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full mb-6 border"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-yellow-400 mr-2">★</span>
            <span className="text-sm font-medium">Rated 5 by our clients</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Words of praise from others about our presence.
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative">
          {/* Top Row - Sliding Left */}
          <div className="overflow-hidden mb-8">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -50 * topRowTestimonials.length + "%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedTopRow.map((testimonial, index) => (
                <div
                  key={`top-${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg"
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg
                      className="w-8 h-8 text-blue-500 opacity-60"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.author}'s photo`}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <div className="text-gray-900 font-semibold text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.position} of {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
