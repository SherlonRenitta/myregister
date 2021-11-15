import React, { useState } from "react";
import "./input.css";
import { Controller } from "react-hook-form";

export default function Input({
  register,
  name,
  type,
  value,
  onClick,
  required,
  ...rest
}) {
  const [chechInput, setCheckInput] = useState(false);
  console.log(chechInput);
  // const clickSubmit = () => {
  //   if (setCheckInput === "") {
  //     alert();
  //   } else {
  //     chechInput(true);
  //   }
  // };

  return (
    <div className="form_input">
      <input
        ref={register}
        name={name}
        type={type}
        value={value}
        required={required}
        // onClick={clickSubmit}
      />
      <>{}</>
    </div>
  );
}
