import "./content.css";
import Feature from "./Feature";
import Form from "./Form";

const Content = () => {
  return (
    <div className="content">
      <p className="p-1">Stay updated!</p>
      <p className="p-2">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <Feature text={"Product discovery and building what matters"} />
      <Feature text={"Measuring to ensure updates are a success"} />
      <Feature text={"And much more!"} />
      <Form />
    </div>
  );
};

export default Content;
