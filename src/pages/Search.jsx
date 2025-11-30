import { useSearchParams } from 'react-router-dom';
import { useMainContext } from '../hooks/useMainContext';
import ProductCard from '../components/ProductCard';
import NotFoundPage from './NotFoundPage';

const Search = () => {
  const { products } = useMainContext();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const filtered = products.filter((pro) => {
    return (
      pro.name.toLowerCase().includes(query.toLowerCase()) ||
      pro.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
  });

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

export default Search;
