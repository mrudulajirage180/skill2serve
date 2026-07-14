import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Navbar />

      <section className="login-page">

        <div className="login-card">

          <h2>Welcome Back 👋</h2>

          <p>
            Login to continue using Skill2Serve
          </p>

          <form className="login-form">

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button type="submit">
              Login
            </button>

          </form>

          <div className="login-links">

            <a href="/">Forgot Password?</a>

            <p>
              Don't have an account?
              <Link to="/worker-register"> Register</Link>
            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default Login;