import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div className="text-darkBlack font-semibold dark:text-white">
      <Header />
      <main className="bg-lightGray dark:bg-darkBlack min-h-[90dvh] py-10 lg:pl-[420px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
