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
      "We offer a comprehensive range of web design and development services, including custom website design, web development, website maintenance, and more.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The cost of a website varies depending on factors such as complexity, features, design requirements, and functionality. We provide personalized quotes tailored to each client's specific needs and budget.",
  },
  {
    question: "How quickly can you complete a website?",
    answer:
      "We understand the importance of timely delivery. The timeline for website development varies depending on the scope and requirements of the project. Typically, we can complete a simple website within a week. For more complex projects, the time-frame may extend to two weeks. However, we also offer expedited services for urgent projects, ensuring that your website is delivered as quickly as possible without compromising quality.",
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer:
      "We strive to deliver exceptional service and results to every client. If you're not satisfied with our service, we'll work closely with you to address any concerns and find a solution that meets your needs. While we don't offer refunds for services rendered, we are committed to ensuring your satisfaction and will do our best to make things right.",
  },
  {
    question: "Do you provide ongoing support after the website is launched?",
    answer:
      "Absolutely! we offer ongoing support and maintenance services to ensure your website stays current with the latest trends and technologies. Our support packages include bug fixes and technical assistance as needed.",
  },
  {
    question:
      "What platform or technologies do you use for website development?",
    answer:
      "At Nimor, we believe in empowering you with full control over your website. That's why we harness the core languages like HTML, CSS, JavaScript, React and other industry-standard tools and frameworks to craft tailored solutions that put you in the driver's seat of customization and power.",
  },
];

function FaqList() {
  return (
    <div className="flex flex-col gap-4 basis-[785px] grow">
      {faqs.map(({ question, answer }, index) => {
        return <FaqItem question={question} answer={answer} key={index} />;
      })}
    </div>
  );
}

export default FaqList;
