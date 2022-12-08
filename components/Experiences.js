import Image from "next/image";
import watchtowr from "../public/watchTowr.png";
import ezgreen from "../public/ezgreen.png";

const experiences = [
  {
    id: 1,
    img: ezgreen,
    title: "Freelance Software Engineer",
    company: "EzGreen",
    period: "Aug 2022 - Present",
    tools: ["Flutter"],
    description:
      "Building a gamified journaling app to advocate sustainable practices.",
  },
  {
    id: 2,
    img: watchtowr,
    title: "Cybersecurity Engineer Intern",
    company: "watchTowr",
    period: "Jun 2022 - Jul 2022",
    tools: ["Python", "Docker", "Apache Airflow"],
    description:
      "Wrote Python scripts to automatically discover clients' attack surfaces and potential vulnerabilities. Scripts are deployed on watchTowr's labs to simplify security researchers' daily tasks.",
  },
];

const Experiences = () => {
  return (
    <div className="pb-10">
      <h3 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Work experience
      </h3>
      <div className="flex flex-col items-center gap-10 py-10">
        {experiences.map(
          ({ id, img, title, company, period, tools, description }) => {
            return (
              <div
                key={id}
                className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {company}
                </h5>
                <h2 className="font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {description}
                </p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Experiences;
