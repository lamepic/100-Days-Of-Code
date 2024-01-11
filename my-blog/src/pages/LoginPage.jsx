import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/articles");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <div className="w-1/5 mx-auto mt-2 border p-2 rounded-sm">
      <h1 className="text-2xl">Login Page</h1>
      <form>
        {error && <span className="text-red-500">{error}</span>}
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            className="border"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            className="border"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="border p-2 mt-2 w-full" onClick={handleLogin}>
          Login
        </button>
      </form>
      <Link to="/create-account">Create account</Link>
    </div>
  );
}

export default LoginPage;
