import { Link } from "react-router-dom";
import image from "../assets/dev.jpg";
const Header = () => {
  return (
    <div className="h-[80vh] w-[95%] mx-auto flex md:flex-row flex-col">
      <img
        className="md:w-1/2 w-full md:h-4/6 h-3/6 my-auto fadeInLeft"
        // src="https://camo.githubusercontent.com/01c83210f7feb975ea3b9a852808beb6689425add471f76f942c15875626af5d/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966"
        src={image}
        alt=""
      />
      <div className="md:w-1/2 w-full font-semibold flex flex-col justify-center items-center fadeInRight">
        <div className="md:w-[80%] text-black md:text-5xl text-4xl  text-center leading-[4.25rem]">
          چهارمین دوره مسابقات برنامه نویسی صبا
        </div>
        <Link to={"/register"} >
          <button className="mt-14 border px-10 py-3 rounded-md border-red-500 bg-[#BE1E2F] text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-red-200 transition-all">
            <span className="font-medium text-lg">ثبت نام</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
