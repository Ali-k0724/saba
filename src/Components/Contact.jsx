import Input from "../Input";
import useComponentVisible from "../hooks/useComponentVisible";

const Contact = () => {
  const { ref, isVisable } = useComponentVisible();
  return (
    <div
      className="h-screen md:h-[70vh] w-full mt-10 mx-auto"
      id="contact"
      ref={ref}
    >
      <h1 className="text-center my-10 font-semibold text-3xl">تماس با ما</h1>
      <div className="flex md:flex-row flex-col-reverse justify-between w-10/12 mx-auto">
        <div
          className={`md:w-[50%] text-right new-event ${
            isVisable ? "fadeInLeft" : null
          }`}
        >
          <div className="flex justify-between mb-8">
            <div className="w-[47%]">
              <Input
                title={"شماره تماس"}
                className="h-14 w-full  px-6 text-xl border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 text-right"
              />
            </div>
            <div className="w-[47%]">
              <Input
                title={"نام و نام خانوادگی"}
                className="h-14 w-full px-6 text-xl border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 text-right"
              />
            </div>
          </div>
          <Input
            title={"موضوع"}
            className="h-14 mb-8 w-full px-6 text-xl border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 text-right"
          />
          <Input
            title={"ایمیل"}
            className="h-14 mb-8 w-full px-6 text-xl border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 text-right"
          />
          <label className="relative cursor-text">
            <input
              type="text"
              placeholder="Input"
              className="h-36 mb-8 w-full px-6 text-xl border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 text-right"
            />
            <span className="text-base text-slate-800 text-opacity-80  absolute right-5 -top-9 px-1 transition duration-200 input-text">
              متن پیام
            </span>
          </label>
          <button className="flex border px-6 py-3 bg-blue-500 text-white rounded-lg">
            ارسال پیام
          </button>
        </div>
        <div
          className={`md:w-[45%] md:mb-0 mb-5 text-right text-xl text-slate-800 new-event ${
            isVisable ? "fadeInRight" : null
          }`}
        >
          <div className="mb-4">
            کرمان،بزرگراه امام خمینی ،میدان پژوهش دانشگاه شهید باهنر کرمان
          </div>
          <div className="mb-4">saba@test.com</div>
          <div className="mb-4">۰۹۱۳۵۶۹۸۷۱۹</div>
          <div className="mb-4">۰۹۱۳۵۶۹۸۷۱۹</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
