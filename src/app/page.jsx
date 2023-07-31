import Footer from "./components/layouts/footer";
import ParticlesBackground from "@/app/components/tools/particles";
import NavBar from "./components/layouts/navbar";
import Home from "./home";


const HomePage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
      <ParticlesBackground />
    </>
  );
};

export default HomePage;
