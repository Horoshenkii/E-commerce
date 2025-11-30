import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="dark:bg-darkBlack bg-lightGray px-2 pb-6 lg:pr-15 lg:pl-[420px]">
      <div className="dark:bg-darkGray bg-mediumGray flex flex-col items-center justify-between gap-4 rounded-2xl p-6 text-center text-sm">
        <p>© {new Date().getFullYear()} ECommerceDev. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
          <p className="flex items-center gap-1">Made with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
