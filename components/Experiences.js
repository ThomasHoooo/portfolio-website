import Image from "next/image";
import watchtowr from "../public/watchTowr.png";
import ezgreen from "../public/ezgreen.png";

const experiences = [
  {
    id: 1,
    img: ezgreen,
    title: "Freelance Software Engineer",
    company: "EzGreen",
    period: "Dec 2022 - Present",
    tools: ["Flutter"],
    description:
      "I am currently building a gamified journaling app to advocate sustainable practices.",
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
              <div key={id} className="flex flex-row items-center relative">
                <div className="flex flex-col relative max-w-lg max-h-lg p-6 border border-gray-200 rounded-lg shadow-2xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-gray-900 dark:text-white">
                  <div className="text-4xl font-bold tracking-tight ">
                    {company}
                  </div>
                  <div>{period}</div>
                  <div className="text-2xl my-2 tracking-tight ">{title}</div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description}
                  </p>
                  <div className="my-3 text-gray-700 dark:text-gray-400">{`Tech stack: ${tools.map(
                    (tool) => {
                      return " " + tool;
                    }
                  )}`}</div>
                  <div className="mx-auto lg:absolute lg:-right-36 rounded-full overflow-hidden h-28 w-28 lg:h-44 lg:w-44 border-2 border-teal-400">
                    <Image src={img} />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Experiences;
