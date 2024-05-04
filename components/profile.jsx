"use client";

import { useState } from "react";
import ProfileMenu from "./profilemenu";
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const ProfilePage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleTheme = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section
      className={`min-h-screen font-semibold font-nunito ${
        isClicked ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <ProfileMenu onClicked={isClicked} onTheme={handleTheme} />
      <section className="px-1 sm:px-10 lg:px-20 xl:px-48 pt-20 grid items-center gap-5 pb-16 text-sm sm:text-lg">
        <h1 className="text-center text-5xl">Pavithran Gopalakrishnan</h1>
        <h1 className="text-center text-2xl">Frontend Developer</h1>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          Frontend Web Application Developer with experience in developing user
          friendly and responsive web applications. Seeking a challenging
          position where i can utilize my technical expertise and creativity to
          deliver exceptional user experiences.
        </p>
        <hr />
        <span className="border-l-2 border-slate-400 px-5 py-1">
          <h1 className="flex gap-3 items-center">
            <AiOutlineMail className="h-6 w-6" />{" "}
            <span>pavithran.soft@gmail.com</span>
          </h1>
          <h1 className="flex gap-3 items-center">
            <AiOutlineMobile className="h-6 w-6" /> <span>+91-8012322922</span>
          </h1>
          <h1 className="flex gap-3 items-center">
            <AiOutlineGithub className="h-6 w-6" />
            <Link href={"https://github.com/pavithransoft"}>
              https://github.com/pavithransoft
            </Link>
          </h1>
          <h1 className="flex gap-3 items-center">
            <AiOutlineLinkedin className="h-6 w-6" />
            <Link href={"https://www.linkedin.com/in/pavithran-gopalakrishnan"}>
              https://www.linkedin.com/in/pavithran-gopalakrishnan
            </Link>
          </h1>
        </span>
        <hr />
        <h1 className="font-extrabold sm:text-lg lg:text-xl underline underline-offset-4">
          WORK EXPERIENCE
        </h1>
        <h1 className="font-bold sm:text-lg lg:text-xl">
          Frontend Developer at Interview Desk January 2022 – Present.
        </h1>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          As a React Frontend Developer, I played a pivotal role in designing
          and implementing user-friendly, responsive web applications.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          During my tenure at Interview Desk, I demonstrated proficiency in
          HTML, CSS, JavaScript and React, contributing to the development of
          innovative and visually appealing interfaces.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          I collaborated closely with cross-functional teams to translate design
          concepts into functional code, enhancing user experiences and ensuring
          optimal performance.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          My ability to solve complex problems and stay up-to-date with the
          latest industry trends allowed me to create elegant, efficient
          solutions that elevated our products frontend capabilities.
        </p>
        <h1 className="font-bold sm:text-lg lg:text-xl">
          Frontend Intern at Interview Desk July 2022 – December 2022.
        </h1>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          During my internship as a React Frontend Intern at Interview Desk, I
          embarked on a dynamic learning journey.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          I worked diligently alongside experienced developers, gaining hands-on
          experience with HTML, CSS, JavaScript and React, and contributed to
          various projects.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          My responsibilities included assisting in the implementation of
          frontend features, debugging, and optimizing code.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          This opportunity allowed me to grow as a developer, absorb valuable
          insights from my mentors, and make tangible contributions to the teams
          success.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          I eagerly embraced challenges and absorbed knowledge, solidifying my
          passion for frontend development and setting a strong foundation for
          my career in this field.
        </p>
        <h1 className="font-extrabold sm:text-lg lg:text-xl underline underline-offset-4">
          PROFICIENCY
        </h1>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          Programming Languages – HTML 5, CSS 3, JavaScript (ES6+).
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          Frontend Frameworks – React.js.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          Frontend Libraries – React Router, React Hooks, Tailwind CSS.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          Testing and Debugging – Chrome DevTools, React Developer Tools.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          Version Control Systems – Git.
        </p>

        <h1 className="font-extrabold sm:text-lg lg:text-xl underline underline-offset-4">
          SKILLS
        </h1>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          HTML 5, CSS 3, JavaScript (ES6+), React.js, Next.js, React Router,
          React Hooks, Redux, Tailwind CSS, Next Auth, SASS, Node.js, MongoDB,
          MySQL, React Hook Form, Zod, Yup, Bootstrap, Material UI, Ant Design,
          Shad Cn, Git, Github, Java, Android, XML, UI Development, Web
          Development, Mobile Development and etc.
        </p>
        <h1 className="font-extrabold sm:text-lg lg:text-xl underline underline-offset-4">
          COURSES
        </h1>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          React JS – The Complete Guide ( including React Router, Hooks, Redux,
          Next.js ).
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          Node JS – The Complete Guide ( MVC, REST APIs, GraphQL, add
          Authentication, use MongoDB, SQL ).
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          Mongo DB – The Complete Developers Guide ( for Web and Mobile Apps,
          CRUD Operations, Indexes, Aggregation Framework ).
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          Advanced Java Programming ( C, C++, HTML, RMI, Sun Java, Servlets ).
        </p>
        <h1 className="font-extrabold sm:text-lg lg:text-xl underline underline-offset-4">
          QUALIFICATION
        </h1>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          Bachelor of Engineering in Computer Science Under Anna University,
          Chennai.
        </p>
        <h1 className="font-extrabold sm:text-lg lg:text-xl underline underline-offset-4">
          LIVE
        </h1>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          <span className="sm:text-xl">Vercel</span>
          <Link
            href={"https://portfolio-deploy-rosy.vercel.app/"}
            className="p-1 sm:p-2 mx-2 sm:mx-4 lg:text-lg border-b-2"
          >
            <span className="px-2 border-r-2 font-bold">go-to</span>
            <span className="px-2">Portfolio</span>
          </Link>
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          <Link
            href={"https://react-code-test-dashboard.vercel.app/"}
            className="p-1 sm:p-2 mx-2 sm:mx-4 lg:text-lg border-b-2"
          >
            <span className="px-2">Dashboard</span>
          </Link>
          <Link
            href={"https://table-deploy.vercel.app/"}
            className="p-1 sm:p-2 mx-2 sm:mx-4 lg:text-lg border-b-2"
          >
            <span className="px-2">Table</span>
          </Link>
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          My personal portfolio features a standout React project that
          encapsulates my proficiency in frontend development.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          This project, developed using React, showcases my ability to create
          interactive, responsive, and engaging user interfaces.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          Leveraging the power of React components, state management, and
          efficient rendering, this project seamlessly integrates complex
          functionalities, delivering a polished and user-friendly experience.
        </p>
        <p className="border-l-2 border-slate-400 px-5 py-1">
          It serves as a testament to my commitment to mastering React and my
          dedication to delivering top-notch solutions in the world of web
          development.
        </p>
      </section>
    </section>
  );
};

export default ProfilePage;
