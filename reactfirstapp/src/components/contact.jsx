import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate=useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center gap-2">
      <h2>Programmatic Navigation in React</h2>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
      <button className="btn btn-primary" onClick={() => navigate("/")}>Home</button>
      <button className="btn btn-primary" onClick={() => navigate(1)}>Forward</button>
    </div>
  );
};

export default Contact;
