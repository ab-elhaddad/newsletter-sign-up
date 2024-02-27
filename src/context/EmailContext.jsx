import { createContext, useState } from "react";

export const emailContext = createContext("");
const EmailContext = ({ children }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <emailContext.Provider value={[email, setEmail]}>
        {children}
      </emailContext.Provider>
    </>
  );
};

export default EmailContext;
