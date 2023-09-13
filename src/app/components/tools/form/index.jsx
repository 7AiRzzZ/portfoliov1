"use client";

import Input from "../input";
import Button from "../button";

const Form = () => {
  const SubmitForm = () => {
    alert("Formulaire envoyé");
  };

  return (
    <form className="w-full rounded-none p-4 text-black" action="">
      <div className="lg:grid lg:grid-cols-2">
        <div className="flex flex-col lg:mx-10 lg:py-4 lg:px-4">
          <label className="lg:pl-8 dark:text-white" htmlFor="">
            Prénom / nom :
          </label>
          <Input type="text" placeholder="Votre nom et prénom" />
        </div>
        <div className="flex flex-col py-4 lg:mx-10 lg:py-4 lg:px-4">
          <label className="lg:pl-8 dark:text-white" htmlFor="">
            Email :
          </label>
          <Input  type="text" placeholder="Votre email" />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="lg:pl-20 dark:text-white" htmlFor="">
          Objet :
        </label>
        <textarea
          className="border-2  border-black text-xs py-4 lg:py-8 lg:mx-20"
          placeholder="Votre message"
          name=""
          id=""
          cols="30"
          rows="15"
        ></textarea>
      </div>
      <div className=" flex items-center justify-center">
        <Button onClick={() => SubmitForm()} text="Envoyer" />
      </div>
    </form>
  );
};

export default Form;
