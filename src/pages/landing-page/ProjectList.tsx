import ProjectCard from "./ProjectCard";
import nairaupdatesng from "../../assets/images/nairaupdatesng.png";
import bundleup from "../../assets/images/bundleup.png";
import khaleedPortfolio from "../../assets/images/khaleed-portfolio.png";
import quizwave from "../../assets/images/quizwave.png";

function ProjectList() {
  const projectData = [
    {
      projectImage: khaleedPortfolio,
      projectTitle: "Khaleed portfolio",
      cardID: 1,
      overlayProjectDescription:
        "TaskPulse is a seamless task management app designed for effortless organization and productivity. ",
      link: "https://khaleed.co/",
      linkName: "khaleed.co",
      technologies: "React & Tailwind",
    },
    {
      projectImage: nairaupdatesng,
      projectTitle: "₦airaupdatesng",
      overlayProjectDescription:
        "₦airaupdatesng is an X bot that delivers instant exchange rate updates of the Nigerian Naira to your timeline.",
      cardID: 2,
      link: "https://nairaupdatesng.netlify.app/bot",
      linkName: "nairaupdatesng.netlify.com",
      technologies: "Python, React & Tailwind",
    },
    {
      projectImage: bundleup,
      projectTitle: "Bundleup",
      overlayProjectDescription:
        "Bundleup is a platform for showcasing all your links with just one click.",
      cardID: 3,
      link: "https://bundleup.us",
      linkName: "bundleup.us",
      technologies: "React & Tailwind",
    },
    {
      projectImage: quizwave,
      projectTitle: "Quizwave",
      overlayProjectDescription:
        "Quizwave is a sleek and user-friendly quiz app perfect for studying or testing your knowledge.",
      cardID: 4,
      link: "https://quizwave.co",
      linkName: "quizwave.co",
      technologies: "React & Tailwind",
    },
  ];
  return (
    <div className="flex gap-10 flex-wrap justify-center">
      {projectData.map(
        ({
          projectImage,
          projectTitle,
          overlayProjectDescription,
          cardID,
          link,
          linkName,
          technologies,
        }) => {
          return (
            <ProjectCard
              key={cardID}
              projectTitle={projectTitle}
              projectImage={projectImage}
              overlayProjectDescription={overlayProjectDescription}
              link={link}
              linkName={linkName}
              technologies={technologies}
            />
          );
        }
      )}
    </div>
  );
}

export default ProjectList;
