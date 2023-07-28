const DarkMode = () => {
  let html = document.getElementsByTagName("html");
  html[0].classList.toggle("dark");
};

export default DarkMode;
