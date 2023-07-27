import Btn from "@/app/components/tools/button";

const Contact = () => {
  return (
    <>
      <div className=" flex flex-col justify-center align-top  ">
        <Btn text={"Contact"} />
      </div>

      <div className=" backdrop-blur-sm bg-green-400/30  border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg flex flex-row justify-center mx-2 mb-4 pt-4">
        <form action="">
          <div className=" flex flex-row justify-center items-center align-middle">
            <label htmlFor="">
              <input
                type="text"
                className="text-xs  mr-5 backdrop-blur-sm bg-gray-200/10 border-t-4 border-t-green-700 border-l-4 border-l-green-700 border-r-4 border-r-green-700 border-b-4 border-b-green-700 rounded-sm shadow-lgbg-red-500mx-5 mb-5 h-10 w-36"
                placeholder="Votre nom et prénom"
              />
            </label>
            <label htmlFor="">
              <input
                type="text"
                className="text-xs ml-5 backdrop-blur-sm bg-gray-200/10 border-t-4 border-t-green-700 border-l-4 border-l-green-700 border-r-4 border-r-green-700 border-b-4 border-b-green-700 rounded-sm shadow-lgbg-red-500mx-5 mb-5 h-10 w-36"
                placeholder="Votre email"
              />
            </label>
          </div>
          <div className=" flex items-center justify-center">
            <label htmlFor="">
              <input
                type="text"
                className=" text-center text-xs backdrop-blur-sm bg-gray-200/10  border-t-4 border-t-green-700 border-l-4 border-l-green-700 border-r-4 border-r-green-700 border-b-4 border-b-green-700 rounded-sm shadow-lgbg-red-500mx-5 mb-5 w-80 h-40"
                placeholder="dites moi tout ..."
              />
            </label>
          </div>
          <div className=" flex items-center justify-center">
            <label htmlFor="">
              <input
                type="text"
                className=" text-xs backdrop-blur-sm bg-gray-200/10 border-t-4 border-t-green-700 border-l-4 border-l-green-700 border-r-4 border-r-green-700 border-b-4 border-b-green-700 rounded-sm shadow-lgbg-red-500mx-5 mb-5 w-20 h-10"
                placeholder="    Envoyer"
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
