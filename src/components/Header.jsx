import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BiAtom } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import SideNav from '../smallComponents/SideNav';
import ThemeButton from '../smallComponents/ThemeButton';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [sideNav, setSideNav] = useState(false);

  return (
    <header className="bg-lightGray dark:bg-darkBlack px-2 pt-6 lg:px-0">
      <div className="rounded-2xl lg:pr-15 lg:pl-[420px]">
        <div className="dark:bg-darkGray bg-mediumGray flex h-20 items-center justify-between gap-5 rounded-2xl px-8 text-lg">
          <Link to="/">
            <BiAtom className="text-5xl" />
          </Link>

          <div className="dark:bg-darkBlack bg-lightGray flex w-2/3 items-center rounded-2xl pr-4 md:w-2/5">
            <input
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  navigate(`/search?q=${e.target.value.trim()}`);
                }
              }}
              className="mr-4 h-12 w-full px-4 py-3 outline-none"
              type="text"
            />
            <FaSearch />
          </div>

          <div className={`${sideNav ? `block` : `hidden`}`}>
            <SideNav setProps={setSideNav} props={sideNav} />
          </div>
          <button className="lg:hidden" onClick={() => setSideNav(!sideNav)}>
            Menu
          </button>
          <div className="flex items-center gap-6">
            <ThemeButton />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <SideNav />
      </div>
    </header>
  );
};

export default Header;
