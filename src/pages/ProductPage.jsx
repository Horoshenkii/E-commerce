import { useParams } from 'react-router-dom';
import { useMainContext } from '../hooks/useMainContext';
import NotFoundPage from './NotFoundPage';
import AddToCartBtn from '../smallComponents/AddToCartBtn';
import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { products, cart, addToCart } = useMainContext();

  const { id } = useParams();

  const currentProduct = products.find((p) => {
    return p.id === Number(id);
  });

  if (!currentProduct) return <NotFoundPage />;

  const isInTheCart = cart.find((el) => el.id === currentProduct.id);

  const sameProducts = products.filter(
    (product) =>
      product.id !== currentProduct.id &&
      product.category === currentProduct.category
  );

  if (!currentProduct) {
    return <NotFoundPage />;
  }

  return (
    <div className="px-2 lg:pr-15">
      <h1 className="mb-7 text-xl font-semibold">{currentProduct.name}</h1>
      <div className="mb-8 flex flex-col justify-between lg:flex-row">
        <div className="bg-mediumGray dark:bg-darkGray mb-12 flex aspect-video w-full justify-center rounded-2xl p-8 lg:mb-0 lg:w-[55%] lg:p-12">
          <img
            className="object-contain duration-150 hover:scale-110"
            src={currentProduct.image}
            alt={currentProduct.name}
          />
        </div>
        <div className="bg-mediumGray dark:bg-darkGray aspect-video w-full rounded-2xl p-8 lg:w-[40%] lg:p-12">
          <div className="border-darkGray dark:border-lightGray border-b-2 pb-5">
            <p className="mb-4 text-xl">Specs:</p>
            <ul className="grid grid-cols-2 text-lg wrap-break-word">
              {Object.entries(currentProduct.specs).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-xl">{currentProduct.price}$</h2>
            <div className="mt-6 h-12 w-1/2 min-w-40">
              <AddToCartBtn
                isInTheCart={isInTheCart}
                addToCart={addToCart}
                product={currentProduct}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-mediumGray dark:bg-darkGray mb-8 flex aspect-4/1 w-full flex-col items-center justify-center rounded-2xl p-6 text-lg lg:w-[55%]">
        <p>{currentProduct.description}</p>
        <ul className="mt-4 flex gap-3 text-sm">
          {currentProduct.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        loop
        navigation
        breakpoints={{
          360: { slidesPerView: 2, spaceBetween: 5 },
          1024: { slidesPerView: 4 },
        }}
      >
        {sameProducts.map((sameProduct) => (
          <SwiperSlide className="p-4">
            <ProductCard product={sameProduct} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductPage;
