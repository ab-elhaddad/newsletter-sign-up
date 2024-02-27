import "./index.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { emailContext } from "./../../context/EmailContext";

const SuccessPage = () => {
  const email = useContext(emailContext)[0];
  const navigate = useNavigate();
  return (
    <div className="succ-container">
      <img src="./images/icon-success.svg" alt="Success icon" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to{" "}
        <span style={{ fontWeight: 600 }}>{email}</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button onClick={() => navigate("/")}>Dismiss message</button>
    </div>
  );
};

export default SuccessPage;
