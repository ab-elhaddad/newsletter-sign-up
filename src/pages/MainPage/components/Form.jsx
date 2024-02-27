import "./form.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { emailContext } from "./../../../context/EmailContext";

const Form = () => {
  const [isError, setIsError] = useState(false);
  const setEmail = useContext(emailContext)[1];
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = document.getElementById("email");

    const email = e.target.elements.email.value;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (emailRegex.test(email)) {
      setIsError(false);
      setEmail(email);
      navigate("/success");
    } else {
      input.style.border = "solid 1px var(--tomato)";
      input.style.backgroundColor = "var(--light-tomato)";
      input.style.color = "var(--tomato)";
      setIsError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="labels">
        <label for="email" className="l-1">
          Email address
        </label>
        <label htmlFor="email" className="l-2">
          {isError ? "Valid email required" : ""}
        </label>
      </div>
      <input type="email" placeholder="email@company.com" id="email" />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
};

export default Form;
