const Input = ({type, placeholder}) => {
  return (
    <input
      type={type}
      className=" lg:py-2 lg:px-2 text-xs backdrop-blur-sm border-2 border-black rounded-full shadow-lg lg:mx-5 lg:mb-5"
      placeholder={placeholder}
    />
  );
};

export default Input;
