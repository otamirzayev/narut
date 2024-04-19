import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <h3 style={{ textAlign: "center", fontWeight: "800", fontSize: "32px" }}>
        Welcome to anime
      </h3>
      <div
        style={{
          height: "1px",
          width: "900px",
          backgroundColor: "aqua",
          marginBottom: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ borderRadius: "15px" }}
          src="https://media.distractify.com/brand-img/bwzKFiLe_/0x0/naruto-anime-1691092442445.jpg"
          alt=""
          height={500}
          width={900}
        />
        <p style={{ textAlign: "center" }}>
        Naruto[a] is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts: the first is set in Naruto's pre-teen years (volumes 1–27), and the second in his teens (volumes 28–72). The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha's monthly Hop Step Award the following year, and Naruto (1997).
        </p>

        <Link
          style={{
            border: "3px solid blue",
            backgroundColor: "aqua",
            borderRadius: "10px",
            padding: "10px",
          }}
          to="/contact"
        >
          More
        </Link>
      </div>
    </div>
  );
}

export default Home;
