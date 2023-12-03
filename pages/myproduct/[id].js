import { useEffect, useState } from "react";
import datas from "@/datas/store";
import ReactStars from "react-rating-stars-component";
function MyPage({ id }) {
  const [store, setstore] = useState(datas);
  const [product, setproduct] = useState(
    datas.products.filter((f) => f.slug === id)[0]
  );

  const [selectedImage, setselectedImage] = useState(-1);
  const [list, setlist] = useState([]);

  useEffect(() => {}, []);
  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 to-blue-400">
        <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
          {/* Grid */}
          <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
            <div className="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
              <p className="me-5 inline-block text-sm font-semibold text-white">
                Ready to get started?
              </p>
              <a
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Col */}
            <div className="flex items-center">
              <a
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm"
                href="#"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch demo
              </a>
              <span className="inline-block border-e border-white/[.3] w-px h-5 mx-2" />
              <a
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm"
                href="#"
              >
                Explore what's new
              </a>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
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
                          : product.mainImage
                      }
                      className="h-full w-full rounded-3xl object-cover object-center"
                      alt="product image"
                    />
                  </div>
                  {/* small images */}
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
              {/* Product Info */}
              <div className="col-span-12 w-full xl:col-span-5">
                <div className="w-full rounded-xl bg-white px-2 py-3 xl:pl-10 xl:pr-4">
                  <div className="flex w-full items-center justify-start gap-1">
                    <ReactStars
                      count={5}
                      onChange={(e) => {}}
                      size={18}
                      value={product.customerReview.split("out")[0]}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="pl-3 font-semibold">
                      {" "}
                      {product.customerReview}
                    </p>
                  </div>
                  <h1 className="pt-3 mb-10 text-4xl font-bold ">
                    {product.name}
                  </h1>

                  {product.features.map((m, i) => (
                    <p className="text-sm">🚀 {m}</p>
                  ))}
                </div>
                <button className="linear mb-6 mt-6 w-full rounded-xl bg-black py-5 text-xl font-normal tracking-widest text-white transition duration-200 hover:shadow-lg hover:shadow-brand-500/50">
                  👉🏻 Buy Now
                </button>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="max-w-[32px]"
                      src="https://pagepilot.ai/images/truckIcon.svg"
                      alt="shipping"
                    />
                    <p className="pt-3 text-center text-xs text-bluePrimary">
                      Free tracked &amp; insured shipping
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="max-w-[32px]"
                      src="https://pagepilot.ai/images/boxIcon.svg"
                      alt="box"
                    />
                    <p className="pt-3 text-center text-xs text-bluePrimary">
                      Free Returns
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="max-w-[32px]"
                      src="https://pagepilot.ai/images/guaranteeIcon.svg"
                      alt="guarantee"
                    />
                    <p className="pt-3 text-center text-xs text-bluePrimary">
                      30 Days Money Back Guarantee
                    </p>
                  </div>
                </div>
                <div className="my-6 h-[1px] w-full bg-slate-100" />
                {/* <div className="flex flex-col items-center gap-1 pb-10 text-center sm:flex-row sm:text-left">
                  <div>
                    <div className="flex w-full items-center justify-center gap-0.5 sm:justify-start">
                      <ReactStars
                        count={5}
                        onChange={(e) => {}}
                        size={18}
                        value={
                          store?.products[0].reviews[0].reviewRating.split(
                            "out"
                          )[0]
                        }
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mb-2 mt-3 text-xs italic leading-5">
                      {store?.products[0].reviews[0].reviewText.substring(
                        0,
                        150
                      ) + "..."}
                    </p>
                    <p className="relative text-xs font-bold leading-5">
                      <img
                        src="https://pagepilot.ai/images/checkmark.svg"
                        alt="checkmark icon"
                        className="absolute top-[3px] mr-2 inline-block max-w-[15px]"
                      />
                      <span className="pl-5">Richard R.</span>
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            {/* Product Feature with img on left */}
            {/* {product.features.map((m, i) =>
              i % 2 === 0 ? (
                <div
                  key={i}
                  className="col-span-12 my-10 grid w-full grid-cols-12 items-center gap-3"
                >
                  <img
                    className="col-span-12 mx-auto w-4/12 rounded-3xl lg:col-span-7 lg:max-w-md border"
                    src={product.images[i]}
                    alt="product feature"
                  />
                  <div className="col-span-12 mx-auto w-full lg:col-span-5 lg:max-w-md">
                    <div className="flex h-full flex-col items-center justify-center">
                      <h2 className="mb-3 mt-[18px] self-start text-[18px] font-semibold text-bluePrimary md:text-3xl">
                        {m.title} 🌟
                      </h2>
                      <p className="text-xl my-[10px] self-start leading-8">
                        {m}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-span-12 my-10 grid w-full grid-cols-12 items-center  gap-3">
                  <div className="col-span-12 mx-auto w-10/12 lg:col-span-7 lg:max-w-md">
                    <div className="flex h-full flex-col items-center justify-center">
                      <p className="text-xl my-[10px] self-start leading-8">
                        {m}
                      </p>
                    </div>
                  </div>
                  <img
                    className="col-span-12 mx-auto  w-4/12 rounded-3xl lg:col-span-5 lg:max-w-md border"
                    src={product.images[i]}
                    alt="product image"
                  />
                </div>
              )
            )} */}

            <p className="text-center text-[35px] font-bold leading-[56px] tracking-tight mt-20">
              Real people, Real reviews
            </p>
            {/* Product Review */}
            <div className="ml-[133px] mr-[133px] mt-10 flex w-full flex-row items-center justify-center">
              <div
                id="reviewsContainer"
                className="flex w-[90%] flex-row items-center gap-2 overflow-x-scroll scroll-smooth scrollbar-hide hover:scroll-auto"
              >
                {store?.products[0].reviews.map((m, i) => (
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
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query.id);

  return { props: { id: context.query.id } };
}

export default MyPage;
