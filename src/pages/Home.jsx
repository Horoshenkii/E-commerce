import ProductCard from '../components/ProductCard';
import { useMainContext } from '../hooks/useMainContext';
import MainSwiper from '../smallComponents/MainSwiper';
import SmallSwiper from '../smallComponents/SmallSwiper';

const Home = () => {
  const { products } = useMainContext();

  return (
    <div className="px-2 lg:px-0 lg:pr-15">
      <div className="dark:bg-darkGray mb-10 flex rounded-2xl bg-white p-6 lg:gap-6">
        <MainSwiper />
        <SmallSwiper />
      </div>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-5 xl:grid-cols-5">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default Home;
