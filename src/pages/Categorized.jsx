import { useParams } from 'react-router-dom';
import { useMainContext } from '../hooks/useMainContext';
import ProductCard from '../components/ProductCard';

const Categorized = () => {
  const { categorySlug } = useParams();
  const { products } = useMainContext();
  const filtered = products.filter((pro) => pro.category === categorySlug);

  return (
    <div className="px-2 lg:px-0 lg:pr-15">
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-5 xl:grid-cols-5">
        {filtered.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default Categorized;
