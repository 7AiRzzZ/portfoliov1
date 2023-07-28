"use client";

import Input from "../input";
import Button from "../button";

const Form = () => {
  
  const SubmitForm = () => {
    alert("Formulaire envoyé");
  };

  return (
    <form action="" className="w-full flex flex-col items-center">
      <div className="flex flex-col">
        <label htmlFor="">Prénom / nom :</label>
        <Input type="text" placeholder="Votre nom et prénom" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Email :</label>
        <Input type="text" placeholder="Votre email" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Objet :</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className="">
        <Button onClick={() => SubmitForm()} text="Envoyer" />
      </div>
    </form>
  );
};

export default Form;
