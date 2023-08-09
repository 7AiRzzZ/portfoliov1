"use client";

import ScrollToTop from "react-scroll-to-top";
import {BsArrowUpCircle} from "react-icons/bs"

const ReturnToTop = () => {
  return (
    <>
      <ScrollToTop className=" bg-transparent shadow-none" smooth component={<BsArrowUpCircle
      className=" dark:text-white  text-gray-500 rounded-full hover:transition hover:ease-out hover:duration-200 hover:scale-150 hover:text-green-700 dark:hover:text-green-700"
      size={40}/>} />
    </>
  );
};

export default ReturnToTop;
