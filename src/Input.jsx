const Input = ({ title, ...props }) => {
  return (
    <label className="relative cursor-text">
      <input type="text" placeholder="Input" {...props} />
      <span className="text-base text-slate-800 text-opacity-80  absolute right-5 top-1/2 -translate-y-1/2 px-1 transition duration-200 input-text">
        {title}
      </span>
    </label>
  );
};

export default Input;

