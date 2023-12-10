import { useEffect, useState } from "react";
import datas from "@/datas/store";
import ReactStars from "react-rating-stars-component";
function MyPage({ slug }) {
  const [store, setstore] = useState(datas);
  const [product, setproduct] = useState(
    datas.products.filter((f) => f.slug === slug)[0]
  );

  const [selectedImage, setselectedImage] = useState(-1);

  useEffect(() => {}, []);
  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32 ">
        <a href="#" className="text-2xl font-bold text-gray-800">
          {store?.display_name}
        </a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="/checkout"
                >
                  2
                </a>
                <a href="/checkout">
                  <span className="font-semibold text-gray-900">Card Bags</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {product && product.slug && (
        <div className="flex items-center w-full justify-center">
          <div className="container">
            <div className="z-10 m-2 flex flex-col items-center rounded-[20px] bg-white bg-clip-border p-0 sm:p-[18px] md:m-10 max-w-[1496px]">
              <div className="mt-3 h-full w-full grid-cols-12 gap-10 pt-6 xs:flex xs:flex-col sm:grid">
                <div className="col-span-12 h-full w-full min-w-[300px] xl:col-span-7">
                  <div className="flex w-full flex-col items-center justify-center">
                    <div className=" relative max-h-[550px] min-h-[300px] min-w-[300px] max-w-[550px] rounded-xl">
                      <img
                        id="currentImage"
                        src={
                          selectedImage >= 0
                            ? product.images[selectedImage]
                            : product.main_image
                        }
                        className="h-full w-full rounded-3xl object-cover object-center"
                        alt="product image"
                      />
                    </div>

                    <div className="flex w-full flex-row items-center gap-2 rounded-[20px] px-3 py-3">
                      <div
                        id="smallImagesContainer"
                        className="flex w-[100%] pl-20 lg:pl-0 flex-row items-center justify-center gap-2 overflow-x-scroll scroll-smooth rounded-[20px] px-3 py-3 scrollbar-hide hover:scroll-auto"
                      >
                        {product.images.map((m, i) => (
                          <div
                            key={i}
                            onClick={() => setselectedImage(i)}
                            className={`small-image-container h-20 w-20 flex-[0_0_auto] rounded-3xl border-[3px] ${
                              selectedImage === i && "border-blueSecondary"
                            }`}
                          >
                            <img
                              id="smallImage0"
                              src={m}
                              className="h-full w-full rounded-[24px] border-[4px] border-white"
                              alt="product image"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 w-full xl:col-span-5">
                  <div className="w-full rounded-xl bg-white px-2 py-3 xl:pl-10 xl:pr-4">
                    <div className="flex w-full items-center justify-start gap-1">
                      <ReactStars
                        count={5}
                        onChange={(e) => {}}
                        size={18}
                        value={product.number_stars}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="pl-3 font-semibold">
                        {product.number_stars}/5
                      </p>
                    </div>
                    <h1 className="pt-3 mb-10 text-4xl font-bold ">
                      {product.title}
                    </h1>
                    <p className="text-sm">{product?.item1}</p>
                    <p className="text-sm">{product?.item2}</p>
                    <p className="text-sm">{product?.item3}</p>
                    <p className="text-sm">{product?.item4}</p>

                    <div className="flex items-center mt-10">
                      <span className="mr-2 text-4xl text-green-500 font-extrabold">
                        ${parseFloat(product?.normal_price || "0").toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button className="linear mb-6 mt-6 w-full rounded-xl bg-black py-5 text-xl font-normal tracking-widest text-white transition duration-200 hover:shadow-lg hover:shadow-brand-500/50">
                    👉🏻 Add to Card
                  </button>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="max-w-[32px]"
                        src="https://pagepilot.ai/images/truckIcon.svg"
                        alt="shipping"
                      />
                      <p className="pt-3 text-center text-xs text-bluePrimary">
                        {product?.shipping}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="max-w-[32px]"
                        src="https://pagepilot.ai/images/boxIcon.svg"
                        alt="box"
                      />
                      <p className="pt-3 text-center text-xs text-bluePrimary">
                        {product?.offer}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="max-w-[32px]"
                        src="https://pagepilot.ai/images/guaranteeIcon.svg"
                        alt="guarantee"
                      />
                      <p className="pt-3 text-center text-xs text-bluePrimary">
                        {product?.guaranty}
                      </p>
                    </div>
                  </div>
                  <div className="my-6 h-[1px] w-full bg-slate-100" />
                </div>
              </div>

              {product && product.reviews && product.reviews.lenght > 0 && (
                <div>
                  <p className="text-center text-[35px] font-bold leading-[56px] tracking-tight mt-20">
                    Real people, Real reviews
                  </p>

                  <div className="ml-[133px] mr-[133px] mt-10 flex w-full flex-row items-center justify-center">
                    <div
                      id="reviewsContainer"
                      className="flex w-[90%] flex-row items-center gap-2 overflow-x-scroll scroll-smooth scrollbar-hide hover:scroll-auto"
                    >
                      {product.reviews.map((m, i) => (
                        <div
                          key={i}
                          className="flex  w-[360px] flex-col items-center justify-between rounded-[20px] bg-[#4318ff]/5 p-[30px] sm:w-[360px]"
                        >
                          <p className="mt-6 h-[100px] w-[150px] text-center text-xs font-normal leading-[18px] tracking-tight sm:w-[300px] sm:text-sm sm:leading-[26px]">
                            {m.reviewText.substring(0, 140) + "..."}
                          </p>
                          <div className="mt-4 flex items-center justify-center sm:mt-2">
                            <p className="text-center text-sm font-bold leading-[32px] tracking-tight">
                              {m.reviewerName}
                            </p>
                          </div>
                          <p className="text-center text-xs  leading-[32px] tracking-tight">
                            {m.reviewDate}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-20 flex max-w-full flex-col items-center justify-center sm:max-w-[760px]">
                    <p className="mt-6 text-center text-[14px] font-normal leading-[40px] tracking-tight sm:text-[18px]">
                      {store?.products[0].description}
                    </p>
                    <button className="linear mb-6 mt-6 w-full max-w-[400px] rounded-xl bg-brand-900 bg-gradient-to-br from-brandLinear to-blueSecondary py-5 text-xl font-normal tracking-widest text-white transition duration-200 hover:shadow-lg hover:shadow-brand-500/50">
                      👉🏻 Buy Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  return { props: { slug: context.query.slug } };
}

export default MyPage;
