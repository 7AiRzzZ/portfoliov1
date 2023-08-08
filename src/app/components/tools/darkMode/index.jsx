const DarkMode = () => {
  let html = document.getElementsByTagName("html");
  let bmMenu = document.getElementsByClassName("bm-menu");
  html[0].classList.toggle("dark");
  bmMenu[0].classList.toggle("dark:bg-black");
};

export default DarkMode;
