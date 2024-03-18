import useComponentVisible from "../hooks/useComponentVisible";

const Event = ({ title, image }) => {
  const { ref, isVisable } = useComponentVisible();
  return (
    <div ref={ref}>
      <h4 className="mr-auto text-right font-semibold mb-5 text-3xl relative mt-6">
        <span className="mr-4">{title}</span>
        <div
          className="after:block after:h-[1px] after:top-1/2 after:-translate-y-1/2 
                   after:absolute after:-right-2.5 after:w-4 after:bg-[#B7C9CC] before:block before:w-5
                    before:h-5 before:border before:pt-2 before:bg-white before:border-[#B7C9CC] before:absolute before:rounded-full before:-right-[2.125rem] before:top-1/2 before:-translate-y-1/2"
        ></div>
      </h4>
      <div className="flex md:flex-row-reverse flex-col-reverse justify-between items-center mb-16 ">
        <div className={`md:w-[45%] event ${isVisable ? "fadeInRight" : null}`}>
          <div className="text-right leading-9 text-lg">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.دنیای
            موجود طراحی اساسا مورد استفاده قرار گیرد.
          </div>
        </div>
        <div
          className={`md:w-[45%] max-h-[50vh] event ${
            isVisable ? "fadeInLeft" : null
          }`}
        >
          <img src={image} alt="" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Event;
