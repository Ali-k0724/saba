import { Link } from "react-router-dom";
import Input from "../Input";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="bg-[#F0F4F7] h-screen w-screen">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link to={"/"}>
          <div className="h-20 w-20 mb-6 mx-auto">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="h-[45vh] md:w-[26vw] w-[90vw]  shadow-lg rounded-lg mx-auto p-10 bg-white">
          <div className="mb-6 text-right font-semibold text-xl">ورود</div>

          <Input
            title={"کد ملی"}
            className="h-14 w-full px-6 text-xl border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 text-right mb-6"
          />
          <Input
            title={"رمز عبور"}
            className="h-14 w-full px-6 text-xl border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 text-right mb-6"
          />
          <button className="w-full border bg-blue-500 py-3 rounded-lg text-white mb-6">
            ورود
          </button>
          <div className="text-right text-base">
            <span className=" ml-1">ثبت نام نکرده اید؟</span>
            <Link to={"/register"}>
              <span className="text-blue-400 cursor-pointer underline">
                ثبت نام
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
