import Button from "@/app/components/tools/button";
import ProjetCard from "@/app/components/tools/projetCard/projetCard";
import Form from "@/app/components/tools/form";
import Titre from "@/app/components/tools/titre";

const Contact = () => {
  return (
    <section className=" mx-2 my-2">
      {/* ---------------- */}
      <div className=" lg:mt-16 lg:mx-4 lg:my-4 lg:flex lg:justify-start lg:items-start">
        <Titre className={"px-4"}>
          <h1 className="uppercase py-1 lg:text-4xl">Contact</h1>
        </Titre>
      </div>
      {/* ----------------- */}
      <ProjetCard className=" lg:mx-72 lg:my-8">
        <Form />
      </ProjetCard>
    </section>
  );
};
export default Contact;
