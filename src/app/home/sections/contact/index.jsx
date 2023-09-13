
import Form from "@/app/components/tools/form";
import Titre from "@/app/components/tools/titre";

const Contact = () => {
  return (
    <section className="mx-2 my-2" id="contact">
      <div className=" lg:mt-16 lg:mx-4 lg:my-4 lg:flex lg:justify-start lg:items-start">
        <Titre className={"dark:text-white px-4"}>
          <h1 className="uppercase py-1 lg:text-4xl">Contact</h1>
        </Titre>
      </div>
      <div className="mb-12 lg:mb-20 lg:mx-52"> 
        <div className="contain mx-2 my-4 border-x-4 dark:bg-blue-300/70 dark:border-white/90 border-black border-y-4 py-2 px-2 shadow-lgfont-retrogaming dark:text-white lg:mx-36 lg:my-8">
          <Form   />
        </div>
      </div>
    </section>
  );
};
export default Contact;
