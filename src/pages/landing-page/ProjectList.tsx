import ProjectCard from "./ProjectCard";
import nairaupdatesng from "../../assets/images/nairaupdatesng.png";
import bundleup from "../../assets/images/bundleup.png";
import rentease from "../../assets/images/rentease.png";
import khaleedPortfolio from "../../assets/images/khaleed-portfolio.png";

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
      projectImage: rentease,
      projectTitle: "Rentease",
      overlayProjectDescription:
        "Rentease Simplifies rentals by providing transparency and scam prevention for both landlords and tenants.",
      cardID: 4,
      link: "https://renteasenow.netlify.app/",
      linkName: "renteasenow.netlify.com",
      technologies: "MERN Stack",
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
