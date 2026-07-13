import Navbar from "../../components/Navbar/Navbar";

function Contact() {
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
        Contact Page
      </div>
    </>
  );
}

export default Contact;