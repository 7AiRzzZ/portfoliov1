const Input = ({type, placeholder}) => {
  return (
    <input
      type={type}
      className=" text-center text-xs backdrop-blur-sm bg-gray-200/10  border-t-4 border-t-green-700 border-l-4 border-l-green-700 border-r-4 border-r-green-700 border-b-4 border-b-green-700 rounded-sm shadow-lgbg-red-500mx-5 mb-5"
      placeholder={placeholder}
    />
  );
};

export default Input;
