import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>contact</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        

        <a href="#">You Tube https://www.youtube.com/@Dark_tobi-77</a>
      </div>
      <img  style={{ borderRadius: "15px" }} src="https://w.forfun.com/fetch/34/34f822a8342112765c50d0dadc847e4d.jpeg" alt="" height={500}
          width={900} />
    </div>
  );
}

export default Contact;
