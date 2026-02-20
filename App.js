import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? <Login /> : <Signup />}

      <div className="switch-link">
        {showLogin ? (
          <p>
            New user? <span onClick={() => setShowLogin(false)}>Sign Up</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setShowLogin(true)}>Login</span>
          </p>
        )}
      </div>
    </>
  );
}

export default App;
