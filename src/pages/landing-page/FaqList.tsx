import FaqItem from "./FaqItem";
import { FaqType } from "../../types/types";

const faqs: FaqType[] = [
  {
    question: "Who are you?",
    answer:
      "Nimor is a professional web design and development agency specializing in creating custom, high-quality websites for businesses and individuals. We deliver exceptional results and exceed client expectations.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of web design and development services, including custom website design, front-end development, website maintenance, and more.",
  },
  {
    question: "How is Nimor different from other agencies?",
    answer:
      "Nimor stands out from other agencies through our commitment to personalized service, attention to detail, and dedication to delivering exceptional results. We take the time to understand each client's unique goals and challenges, and tailor our solutions to meet their specific needs. Our collaborative approach, transparent communication, and focus on customer satisfaction set us apart in the industry.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The cost of a website varies depending on factors such as complexity, features, design requirements, and functionality. We provide personalized quotes tailored to each client's specific needs and budget.",
  },
  {
    question: "How quickly can you complete a website?",
    answer:
      "We understand the importance of timely delivery. The timeline for website development varies depending on the scope and requirements of the project. Typically, we can complete a simple website within a week. For more complex projects, the time-frame may extend to several weeks. However, we also offer expedited services for urgent projects, ensuring that your website is delivered as quickly as possible without compromising quality.",
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer:
      "We strive to deliver exceptional service and results to every client. If you're not satisfied with our service, we'll work closely with you to address any concerns and find a solution that meets your needs. While we don't offer refunds for services rendered, we are committed to ensuring your satisfaction and will do our best to make things right.",
  },
  {
    question:
      "What platform or technologies do you use for website development?",
    answer:
      "At Nimor, we believe in empowering you with full control over your website. That's why we harness the core languages like HTML, CSS, JavaScript, React and other industry-standard tools and frameworks to craft tailored solutions that put you in the driver's seat of customization and power.",
  },
  {
    question: "Do you provide ongoing support after the website is launched?",
    answer:
      "Absolutely! we offer ongoing support and maintenance services to ensure your website stays current with the latest trends and technologies. Our support packages include bug fixes and technical assistance as needed.",
  },
  {
    question:
      "How do you ensure websites are mobile-friendly (responsive design)?",
    answer:
      "We design and develop websites with responsive design principles, ensuring they adapt seamlessly to different screen sizes and devices. Our goal is to provide an optimal user experience across all devices",
  },
  {
    question: "What is your process for website design and development?",
    answer:
      "Our website design and development process typically involves initial consultation and discovery, followed by wire-framing and design mockups, development and testing, client feedback and revisions, and finally, launch and ongoing support.",
  },
];

function FaqList() {
  return (
    <div className="flex flex-col gap-4">
      {faqs.map(({ question, answer }, index) => {
        return <FaqItem question={question} answer={answer} key={index} />;
      })}
    </div>
  );
}

export default FaqList;
