import Btn from "@/app/components/tools/button";

const Contact = () => {
  return (
    <>
      <div className=" flex flex-col justify-center align-top  ">
        <Btn text={"Contact"} />
      </div>
      <div className="flex flex-row justify-center">
        <form action="">
          <div className=" flex flex-row justify-center items-center align-middle">
            <label htmlFor="">
              <input
                type="text"
                className="mr-5 backdrop-blur-sm bg-green-400/30  border-t-4 border-t-green-700 border-l-4 border-l-green-700 border-r-4 border-r-white border-b-4 border-b-white rounded-sm shadow-lgbg-red-500mx-5 mb-5 w-36"
              />
            </label>
            <label htmlFor="">
              <input
                type="text"
                className="ml-5 backdrop-blur-sm bg-green-400/30  border-t-4 border-t-green-700 border-l-4 border-l-green-700 border-r-4 border-r-white border-b-4 border-b-white rounded-sm shadow-lgbg-red-500mx-5 mb-5 w-36"
              />
            </label>
          </div>
          <div className=" flex items-center justify-center">
            <label htmlFor="">
              <input
                type="text"
                className=" backdrop-blur-sm bg-green-400/30  border-t-4 border-t-green-700 border-l-4 border-l-green-700 border-r-4 border-r-white border-b-4 border-b-white rounded-sm shadow-lgbg-red-500mx-5 mb-5 w-full h-20"
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
