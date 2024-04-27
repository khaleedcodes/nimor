import ProjectCard from "./ProjectCard";
import nairaupdatesng from "../../assets/images/nairaupdatesng.png";
import bundleup from "../../assets/images/bundleup.png";
import khaleedPortfolio from "../../assets/images/khaleed-portfolio.png";
import quizwave from "../../assets/images/quizwave.png";

function ProjectList() {
  const projectData = [
    {
      projectImage: khaleedPortfolio,
      projectTitle: "Portfolio",
      cardID: 1,
      link: "https://khaleed.co/",
      linkName: "khaleed.co",
      technologies: "React & Tailwind",
    },
    {
      projectImage: nairaupdatesng,
      projectTitle: "₦airaupdatesng",
      cardID: 2,
      link: "https://nairaupdatesng.netlify.app/bot",
      linkName: "nairaupdatesng.co",
      technologies: "Python, React & Tailwind",
    },
    {
      projectImage: bundleup,
      projectTitle: "Bundleup",
      cardID: 3,
      link: "https://bundleup.us",
      linkName: "bundleup.us",
      technologies: "React & Tailwind",
    },
    {
      projectImage: quizwave,
      projectTitle: "Quizwave",
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
