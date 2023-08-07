"use client";

import Input from "../input";
import Button from "../button";

const Form = () => {
  
  const SubmitForm = () => {
    alert("Formulaire envoyé");
  };

  return (
    <form action="">
      <div className="lg:grid lg:grid-cols-2">

      <div className="flex flex-col lg:mx-10 lg:py-4 lg:px-4">
        <label className="lg:pl-8" htmlFor="">Prénom / nom :</label>
        <Input  type="text" placeholder="Votre nom et prénom" />
      </div>
      <div className="flex flex-col lg:mx-10 lg:py-4 lg:px-4">
        <label className="lg:pl-8" htmlFor="">Email :</label>
        <Input  type="text" placeholder="Votre email" />
      </div>
      </div>
      <div className="flex flex-col">
        <label className="lg:pl-20"  htmlFor="">Objet :</label>
        <textarea className="border-x-4 border-y-4 border-black text-center py-4 lg:py-8 lg:mx-16" placeholder="Votre message" name="" id="" cols="25" rows="7"></textarea>
      </div>
      <div className="">
        <Button onClick={() => SubmitForm()} text="Envoyer" />
      </div>
    </form>
  );
};

export default Form;
