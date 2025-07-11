import { motion } from "framer-motion";
import { Testimonial } from "@/types/types";
import TestimonialCard from "./TestimonialCard";
const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    author: "Ariana Patel",
    position: "Chief Marketing Officer",
    company: "Bundlebit",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "2",
    text: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    author: "Liam Chen",
    position: "Product Manager",
    company: "Ecoglow",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "3",
    text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    author: "Zoey Kim",
    position: "Creative Director",
    company: "Ember",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "4",
    text: "Creative minds behind stunning visuals that elevate our brand - an agency that delivers exceptional results.",
    author: "Mateo Silva",
    position: "Lead UI/UX Designer",
    company: "Maplefix",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "5",
    text: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    author: "Elijah Ahmed",
    position: "Head of Brand Strategy",
    company: "Pawtastic",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "6",
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
    author: "Jasmine Okafor",
    position: "Marketing Strategist",
    company: "Truenorth",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
];


const TestimonialMarquee = () => {
  // Duplicate once for looping
  const marqueeTestimonials = [...defaultTestimonials, ...defaultTestimonials];

  return (
    <div className="w-full overflow-hidden max-w-[1200px] py-12">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {marqueeTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialMarquee;
