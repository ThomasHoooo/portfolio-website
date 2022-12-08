import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import dp from "../public/photo.png";
import Image from "next/image";

const Introduction = () => {
  return (
    <section className="mb-16">
      <div className="text-left lg:flex justify-around p-10">
        <div>
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Thomas Ho
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Aspiring software engineer
          </h3>
          <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl  md:text-xl">
            Hi my name is Thomas! I&apos;m a year 2 computer science
            undergraduate in National University of Singapore (NUS). I enjoy
            leveraging technologies to solve real world problems and playing
            basketball when I&apos;m free :)
          </p>
        </div>
        <div className="mx-auto rounded-full w-70 h-70 relative overflow-hidden md:h-60 md:w-60">
          <Image src={dp} layout="fill" objectFit="cover" quality={100} />
        </div>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a
          target="_blank"
          href="mailto:holokwah@u.nus.edu"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/thomas-hoooo/"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          target="_blank"
          href="https://github.com/ThomasHoooo"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
    </section>
  );
};

export default Introduction;
