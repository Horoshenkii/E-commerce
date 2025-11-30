import { useMainContext } from '../hooks/useMainContext';
import { FaDove, FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const Cart = () => {
  const { cart, clearCart, removeFromCart, dispatch } = useMainContext();

  const currentTotalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  if (cart.length > 0) {
    return (
      <div className="px-2 lg:px-0 lg:pr-15">
        <div className="mb-5">
          <button
            onClick={clearCart}
            className="dark:bg-darkGray bg-mediumGray flex w-[120px] cursor-pointer justify-center rounded-md py-2 text-xl"
          >
            Clear cart
          </button>
        </div>
        <div className="flex flex-col justify-between xl:flex-row">
          <ul className="mb-6 flex w-full flex-col gap-5 xl:w-[65%]">
            {cart.map((product) => {
              return (
                <li className="dark:bg-darkGray bg-mediumGray grid h-[180px] grid-cols-[3fr_4fr] items-center justify-center rounded-2xl p-3">
                  <div className="bg-lightGray mr-3 flex h-[140px] items-center justify-center rounded-xl p-3 dark:bg-white">
                    <img
                      className="h-full object-contain"
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="grid grid-cols-1 items-center justify-between gap-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
                    <p className="duration-100">{product.name}</p>
                    <div className="flex items-center justify-start">
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'CHANGE_QUANTITY',
                            data: { id: product.id, eventQuantity: -1 },
                          })
                        }
                        className="cursor-pointer rounded-tl-sm rounded-bl-sm p-3"
                      >
                        <FaMinus />
                      </button>
                      <p className="px-4 text-xl">{product.quantity}</p>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'CHANGE_QUANTITY',
                            data: { id: product.id, eventQuantity: 1 },
                          })
                        }
                        className="cursor-pointer rounded-tr-sm rounded-br-sm p-3"
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <p className="bg-lightGray dark:bg-darkBlack justify-self-start rounded-lg px-5 py-1.5 text-lg">
                      {(product.price * product.quantity).toFixed(2)}$
                    </p>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="flex cursor-pointer justify-self-end p-1 text-xl md:justify-self-center"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="dark:bg-darkGray bg-mediumGray h-[380px] w-full rounded-2xl py-6 xl:w-[33%]">
            <div className="m-auto mb-10 flex w-[70%] justify-between py-6 text-xl">
              <p>Total price:</p>
              <p className="bg-lightGray dark:bg-darkBlack rounded-lg px-5 py-1.5">
                {currentTotalPrice.toFixed(2)}$
              </p>
            </div>
            <button className="bg-lightGray dark:bg-darkBlack mx-auto mb-10 flex w-[90%] cursor-pointer justify-center rounded-lg py-2 text-xl">
              Go to payment
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-2 lg:px-0 lg:pr-15">
        <div className="dark:bg-darkGray bg-mediumGray mt-20 flex h-[400px] flex-col items-center justify-center gap-8 rounded-2xl px-3">
          <IoCartOutline className="text-5xl" />
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl">Cart is empty</p>
            <p className="text-xl">
              This will show you the items that you have added to your cart.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
