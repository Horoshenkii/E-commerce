import { Link } from 'react-router-dom';
import { FaRegCircleXmark } from 'react-icons/fa6';

const SideNav = ({ setProps, props }) => {
  const paths = [
    { path: '/category/computers', name: 'Computers' },
    { path: '/category/phones-laptops', name: 'Phones | Laptops' },
    { path: '/category/devices', name: 'Devices' },
    { path: '/category/tv', name: 'TV' },
    { path: '/category/for-home', name: 'For home' },
    { path: '/category/transport', name: 'Transport' },
    { path: '/about', name: 'About' },
    { path: '/cart', name: 'Cart' },
  ];
  return (
    <div className="dark:bg-darkGray bg-mediumGray fixed top-1/2 left-0 h-[95dvh] w-[360px] -translate-y-1/2 rounded-r-2xl">
      <button
        className="mt-3 flex justify-self-end rounded-md px-6 py-1.5 lg:hidden"
        onClick={() => setProps(false)}
      >
        <FaRegCircleXmark className="h-8 w-8" />
      </button>
      <div className="flex w-full flex-col text-lg">
        <ul>
          {paths.map((el, i) => (
            <li key={i}>
              <Link
                onClick={() => setProps(!props)}
                to={el.path}
                className="dark:hover:bg-darkBlack hover:bg-lightGray flex h-20 w-full cursor-pointer items-center pl-12 duration-100"
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
