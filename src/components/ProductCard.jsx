import { useNavigate } from 'react-router-dom';
import { useMainContext } from '../hooks/useMainContext';
import AddToCartBtn from '../smallComponents/AddToCartBtn';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, cart } = useMainContext();

  const isInTheCart = cart.find((el) => el.id === product.id);

  return (
    <li
      className="group dark:bg-darkGray bg-mediumGray shadow-accentColor flex h-[370px] cursor-pointer flex-col gap-2 rounded-2xl p-3 duration-100 hover:shadow-lg"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="bg-lightGray flex h-[60%] items-center justify-center rounded-xl p-5 dark:bg-white">
        <img
          className="h-full object-contain"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className="flex h-[25%] flex-col justify-between pb-2">
        <p className="group-hover:text-accentColor">{product.name}</p>
        <p className="group-hover:text-accentColor text-lg">{product.price}$</p>
      </div>
      <div className="h-12">
        <AddToCartBtn
          isInTheCart={isInTheCart}
          addToCart={addToCart}
          product={product}
        />
      </div>
    </li>
  );
};

export default ProductCard;
