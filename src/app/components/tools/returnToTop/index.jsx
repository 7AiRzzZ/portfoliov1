"use client";

import ScrollToTop from "react-scroll-to-top";

const ReturnToTop = () => {
  return (
    <>
      <ScrollToTop smooth component={<p>UP</p>} />
    </>
  );
};

export default ReturnToTop;
