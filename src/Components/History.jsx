import { useEffect, useRef, useState } from "react";
import "../App.css";
import svg1 from "../assets/svg1.svg";
import svg2 from "../assets/svg2.svg";
import svg3 from "../assets/svg3.png";

import Event from "./Event";
const History = () => {
  const ref = useRef(null);
  const [isVisable, setIsVisable] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisable(true);
      }
    });
    observer.observe(ref.current);
  }, []);
  return (
    <>
      <div className="w-10/12 mx-auto pt-24" id="history">
        <div className="font-semibold text-3xl text-center mb-16">تاریخچه</div>
        <div className="flex flex-row-reverse">
          <div className="w-1 bg-slate-300 ml-6"></div>
          <div className="">
            <Event title={"دوره اول"} image={svg1} />
            <Event title={"دوره دوم"} image={svg2} />
            <Event title={"دوره سوم"} image={svg3} />
          </div>
        </div>
        <div className="h-[25vh] relative  flex items-center ml-auto ">
          <div
            className="h-[0.7px] relative right-[30px] w-1/3 border-b-[0.7px] border-slate-300 ml-auto after:block after:w-1/3 after:-z-40 after:absolute after:-right-[30px]
           after:bottom-0 after:border-b-[0.7px] after:border-r-[0.5px] after:border-slate-300 after:h-[12.5vh] after:rounded-br-[30px] before:h-[15vh] before:rounded-tl-[30px]
           before:block before:w-1/2 before:absolute before:-left-[20%] md:before:-left-[40%] before:top-0 before:border-t-[0.7px] before:border-l-[0.7px] before:border-slate-300"
          ></div>
        </div>
        <div
          className={`mt-8 md:w-8/12 items-center flex flex-col mx-auto mb-36 new-event ${
            isVisable ? "fadeInDown" : null
          }`}
          ref={ref}
        >
          <h4 className="mx-auto text-center font-semibold text-4xl mb-8">
            دوره چهارم
          </h4>
          <p className="text-right leading-8 ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.دنیای
            موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>
    </>
  );
};

export default History;
