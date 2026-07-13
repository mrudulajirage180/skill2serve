
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Impact from "../../components/Impact/Impact";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Impact />
    </>
  );
}

export default Home;