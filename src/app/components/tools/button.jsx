import "./styles.css"


const Btn = ({text}) =>{
    return(
  <>
  <div class="container">

<a href="#" class="button">
  <div class="button__line"></div>
  <div class="button__line"></div>
  <span class="button__text">{text}</span>
  <div class="button__drow1"></div>
  <div class="button__drow2"></div>
</a>

</div>
  </>      
    );
};
export default Btn ;