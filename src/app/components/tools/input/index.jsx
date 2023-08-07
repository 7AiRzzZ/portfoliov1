const Input = ({type, placeholder}) => {
  return (
    <input
      type={type}
      className="  lg:py-2 lg:px-2 text-center text-xs backdrop-blur-sm border-x-4 border-y-4 border-black rounded-sm shadow-lg lg:mx-5 lg:mb-5"
      placeholder={placeholder}
    />
  );
};

export default Input;
