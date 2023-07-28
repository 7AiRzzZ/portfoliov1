import Introduction from "./sections/introduction";
import Competences from "./sections/competences";
import Contact from "./sections/contact";
import Parcours from "./sections/parcours";
import Projet from "./sections/projet";

import Main from "@/app/components/layouts/main";

const Home = () => {
  return (
    <Main>
      <Introduction />
      <Competences />
      <Projet />
      <Parcours />
      <Contact />
    </Main>
  );
};

export default Home;
