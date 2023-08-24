import { products } from "../constants";
import { star } from "../assets/icons";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => {
            return (
              <div
                key={product.name}
                className="flex flex-1 flex-col w-full max-sm:w-full"
              >
                <img src={product.imgURL} alt="" />
                <div className="mt-8 flex justify-start gap-2.5">
                  <img src={star} alt="" width={24} height={24} />
                  <p className="font-montserrat text-xl leading-normal text-slate-gray">
                    (4.5)
                  </p>
                </div>
                <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
                  {product.name}
                </h3>
                <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
                  {product.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
