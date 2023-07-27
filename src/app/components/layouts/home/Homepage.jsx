import Introduction from "./sections/Introduction";
import Competences from "./sections/competences";
import Contact from "./sections/contact";
import Parcours from "./sections/parcours";
import Projet from "./sections/projet";

const Header1 = () =>{
    return(
        <>
        
        <Introduction/>
        <Competences/>
        <Projet/>
        <Parcours/>
        <Contact/>
        </>
    )
};

export default Header1;