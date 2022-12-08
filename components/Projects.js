import Image from "next/image";
import myinsurec from "../public/myinsurec.png";
import dequeue from "../public/dequeue.png";
import ifc from "../public/ifc.png";

const projects = [
  {
    id: 1,
    img: ifc,
    title: "I'm Friendly Co",
    github: "https://app.imfriendlyco.com",
    role: "Tech Lead",
    tools: [
      "MongoDB",
      "ExpressJs",
      "ReactJs",
      "NodeJs",
      "Bootstrap",
      "Github Actions",
      "AWS EC2",
    ],
    description:
      "Provide peer support and promote mental wellness by building a full stack web application that offers an anonymous platform for young adults to have meaningful conversations.",
  },
  {
    id: 2,
    img: dequeue,
    title: "Dequeue",
    github: "https://github.com/junweimoo/dequeue-app",
    role: "Full Stack Engineer",
    tools: ["Flutter", "Firebase"],
    description:
      "Developed a full stack mobile app for NUS students to queue for and buy food online, as well as for vendors to organise their menu and orders.",
  },
  {
    id: 3,
    img: myinsurec,
    title: "MyInsuRec",
    github: "https://github.com/AY2223S1-CS2103T-W16-4/tp",
    role: "Team Lead",
    tools: ["Java", "JavaFx"],
    description:
      "Developed a desktop application using Java to help financial advisors in their daily tasks such as keeping track of meetings and organising their clients neatly.",
  },
];

const Projects = () => {
  return (
    <div id="experience">
      <div>
        <h3 className="text-5xl pb-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Projects
        </h3>
      </div>
      <div className="lg:flex gap-10">
        {projects.map(
          ({ id, img, title, github, role, tools, description }) => {
            return (
              <div
                key={id}
                className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-105 cursor-pointer"
              >
                <a target="_blank" href={github} rel="noopener noreferrer">
                  <Image src={img} />
                  <h3 className="text-lg font-medium pt-6 pb-2">
                    {role} @
                    <span className="underline font-bold text-teal-600 dark:text-teal-400">
                      {title}
                    </span>
                  </h3>
                  <p className="text-start py-2">{description}</p>
                  <h4 className="py-4 text-teal-600">Tech stack</h4>
                  {tools.map((tool) => (
                    <p key={`${tool.id}`} className="text-gray-800 py-1">
                      {tool}
                    </p>
                  ))}
                </a>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
