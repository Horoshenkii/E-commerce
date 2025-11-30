import javascript from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';
import react_router from '../assets/icons/react-router.svg';
import react_context from '../assets/icons/react-context-API.svg';
import tailwind from '../assets/icons/tailwind-css.svg';
import vite from '../assets/icons/vite.svg';

const About = () => {
  return (
    <div className="px-2 lg:px-0 lg:pr-15">
      <div className="bg-mediumGray dark:bg-darkGray flex flex-col items-center gap-6 rounded-2xl p-10 text-lg">
        <h1 className="text-2xl font-bold">About this project</h1>
        <h3>
          This project was built as a personal challenge — to learn, practice,
          and showcase my front-end development skills.
        </h3>
        <h3>
          I didn’t aim to reinvent anything big — I simply wanted to build a
          clean, responsive, and visually balanced e-commerce-style website.
        </h3>
        <h3>
          Here, I focused on writing neat React code, designing with care, and
          improving my ability to structure a project from scratch.
        </h3>
        <h2 className="mt-4 text-xl font-bold">Technologies used</h2>
        <ul className="grid w-full grid-cols-4 justify-between lg:grid-cols-5 xl:grid-cols-6">
          <li className="flex flex-col items-center gap-4">
            <img
              className="h-15 w-15"
              src={javascript}
              alt="icon"
              loading="lazy"
            />
            <p>Java Script</p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <img className="h-15 w-15" src={react} alt="icon" loading="lazy" />
            <p>React</p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <img
              className="h-15 w-20"
              src={react_router}
              alt="icon"
              loading="lazy"
            />

            <p>React Router</p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <img
              className="h-15 w-15"
              src={react_context}
              alt="icon"
              loading="lazy"
            />
            <p>React Context API</p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <img
              className="h-15 w-15"
              src={tailwind}
              alt="icon"
              loading="lazy"
            />
            <p>Tailwind CSS</p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <img className="h-15 w-15" src={vite} alt="icon" loading="lazy" />
            <p>Vite</p>
          </li>
        </ul>
        <h2 className="mt-4 text-xl font-bold">Goals and vision</h2>
        <h3>
          My goal is to keep improving as a front-end developer — to build more
          complex, interactive, and polished web experiences.
        </h3>
        <h3>This project is just one of many steps on that path.</h3>
        <h2 className="mt-4 text-xl font-bold">Author</h2>
        <h3>
          Created by Vladimir Ivaniuk, an aspiring front-end developer
          passionate about clean code and thoughtful design.
        </h3>
      </div>
    </div>
  );
};

export default About;
