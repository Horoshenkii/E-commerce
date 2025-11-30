import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const AddToCartBtn = ({ isInTheCart, addToCart, product }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`flex cursor-pointer items-center duration-100 ${isInTheCart ? `bg-accentColor` : `bg-lightGray dark:bg-darkBlack`} hover:bg-accentColor h-full w-full gap-2 rounded-xl px-4 py-1`}
      onClick={(e) => {
        e.stopPropagation();
        isInTheCart ? navigate(`/cart`) : addToCart(product);
      }}
    >
      <IoCartOutline className="text-xl" />
      {isInTheCart ? 'View Cart' : 'Add to cart'}
    </button>
  );
};

export default AddToCartBtn;
