import Btn from "@/app/components/tools/button";


const Introduction = () =>{
    return(
<>
<div className=" uppercase grid grid-cols-1  text-center my-4 mx-10  ">
    <div></div>
    <div className=" backdrop-blur-sm bg-green-500/20 text-s px-2 ">
    <h1>Maxence Dupre</h1>
    <h2>Devellopeur Web Front END|REACT</h2>
    </div>
    <div className="">
        <Btn 
        text={"test"}
        />
    </div>
</div>
</>
    )
};
export default Introduction;
