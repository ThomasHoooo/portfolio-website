import Head from "next/head";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Introduction from "../components/Introduction";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Thomas Ho</title>
        <meta
          name="description"
          content="Thomas Ho's personal website, written using NextJs and Tailwind CSS. A computer science student in NUS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-100 px-10 dark:bg-gray-900 md:px-20 lg:px-10">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Introduction />
        <Experiences />
        <Projects />
      </main>
    </div>
  );
}
