import React, { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [cuit, setCuit] = useState(null);
  const [person, setPerson] = useState(null)

  return (
    <RegisterContext.Provider
      value={{
        step,
        setStep,
        email,
        setEmail,
        cuit,
        setCuit,
        person,
        setPerson
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
