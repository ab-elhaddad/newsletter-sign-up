import "./feature.css";

const Feature = ({ text }) => {
  return (
    <div className="feature">
      <img src="images/icon-list.svg" alt="List icon" />
      <p>{text}</p>
    </div>
  );
};

export default Feature;
