import Navbar from "../../components/Navbar/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          color: "#1E3A8A",
          fontWeight: "bold",
        }}
      >
        Login Page
      </div>
    </>
  );
}

export default Login;