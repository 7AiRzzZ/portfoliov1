"use client";

import ScrollToTop from "react-scroll-to-top";
import {BsArrowUpCircle} from "react-icons/bs"

const ReturnToTop = () => {
  return (
    <>
      <ScrollToTop className=" bg-transparent shadow-none" smooth component={<BsArrowUpCircle
      className=" dark:text-white  text-gray-500 rounded-full hover:transition hover:ease-out hover:duration-200 hover:scale-150 hover:text-blue-400 dark:hover:text-blue-400"
      size={40}/>} />
    </>
  );
};

export default ReturnToTop;
