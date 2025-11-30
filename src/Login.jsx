import React, { useState } from "react";
// import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    // navigate("/AdminDashboard");
    // navigate("/AgentDashboard");
    // Sending user credentials to a server for verification
    fetch(`http://localhost:7000/users?email=${email}&passsword=${password}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
