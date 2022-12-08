import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="py-10 dark:text-white flex-row">
        <ul className="flex items-center justify-end pr-10">
        <li>
            <BsFillMoonStarsFill
            onClick={() => setDarkMode((darkMode) => !darkMode)}
            className="cursor-pointer text-2xl"
            />
        </li>
        <li>
            <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="/thomas_ho_nus_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >
            Resume
            </a>
        </li>
        </ul>
    </div>
  )
}

export default NavBar;
