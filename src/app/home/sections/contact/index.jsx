import Button from "@/app/components/tools/button";
import Card from "@/app/components/tools/card";
import Form from "@/app/components/tools/form";

const Contact = () => {
  return (
    <section className=" mx-2 my-2">
      <div className="flex flex-col justify-center">
        <Button text={"Contact"} />
      </div>
      <Card>
        <Form />
      </Card>
    </section>
  );
};
export default Contact;
