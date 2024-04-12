import FaqItem from "./FaqItem";
import { FaqType } from "../../types/types";

const faqs: FaqType[] = [
  {
    question: "Who are you?",
    answer:
      "Nimor is a professional web design and development agency specializing in creating custom, high-quality websites for businesses and individuals. Our team consists of experienced designers, developers, and digital marketers dedicated to delivering exceptional results and exceeding client expectations.",
  },
  {
    question: "What if I’m not happy with the results?",
    answer:
      "Customer satisfaction is our top priority, and we strive to ensure that every client is delighted with the final outcome of their project. If you're not satisfied with the results, we offer revisions and adjustments to address any concerns and ensure that the final product meets your expectations.",
  },
  {
    question: "Why wouldn't I just hire a full-time developer?",
    answer:
      "While hiring a full-time developer can be beneficial for some businesses, it may not always be the most cost-effective or practical solution. By partnering with Nimor, you gain access to a team of skilled professionals with diverse expertise and experience, without the overhead costs associated with hiring and managing full-time employees.",
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer:
      "We strive to deliver exceptional service and results to every client. If you're not satisfied with our service, we'll work closely with you to address any concerns and find a solution that meets your needs. While we don't offer refunds for services rendered, we are committed to ensuring your satisfaction and will do our best to make things right.",
  },
  {
    question: "How is Nimor different from other agencies?",
    answer:
      "Nimor stands out from other agencies through our commitment to personalized service, attention to detail, and dedication to delivering exceptional results. We take the time to understand each client's unique goals and challenges, and tailor our solutions to meet their specific needs. Our collaborative approach, transparent communication, and focus on customer satisfaction set us apart in the industry.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of web design and development services, including custom website design, front-end and back-end development, e-commerce solutions, website maintenance, and more.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The cost of a website varies depending on factors such as complexity, features, design requirements, and functionality. We provide personalized quotes tailored to each client's specific needs and budget.",
  },
  {
    question: "How long does it take to complete a website?",
    answer:
      "The timeline for website development depends on the scope and requirements of the project. Typically, a simple website can be completed in a few weeks, while more complex projects may take several months.",
  },
  {
    question:
      "What platform or technologies do you use for website development?",
    answer:
      "We utilize a variety of platforms and technologies, including HTML/CSS, JavaScript, WordPress, Shopify, and other industry-standard tools and frameworks, to create custom solutions tailored to each client's needs.",
  },
  {
    question: "Do you provide ongoing support after the website is launched?",
    answer:
      "Yes, we offer ongoing support and maintenance services to ensure your website remains secure, up-to-date, and optimized for performance. Our support packages include regular updates, backups, and technical assistance as needed.",
  },
  {
    question: "Can you help with website maintenance and updates?",
    answer:
      "Absolutely! We offer website maintenance and update services to keep your site running smoothly and ensure it stays current with the latest trends and technologies. Our team can handle everything from content updates to security patches and bug fixes.",
  },
  {
    question:
      "How do you ensure websites are mobile-friendly (responsive design)?",
    answer:
      "We design and develop websites with responsive design principles, ensuring they adapt seamlessly to different screen sizes and devices. Our goal is to provide an optimal user experience across desktops, tablets, and smartphones.",
  },
  {
    question: "What is your process for website design and development?",
    answer:
      "Our website design and development process typically involves initial consultation and discovery, followed by wireframing and design mockups, development and testing, client feedback and revisions, and finally, launch and ongoing support.",
  },
];

function FaqList() {
  return (
    <div className="flex flex-col gap-4">
      {faqs.map(({ question, answer }) => {
        return <FaqItem question={question} answer={answer} />;
      })}
    </div>
  );
}

export default FaqList;
