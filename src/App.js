import Login from "./login";
import Profile from "./Profile";
import { LoginContext } from "./Context/LoginContext";

import { useState } from 'react';

function App() {
  const [username, setUserName] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="App">
      <h1>dsdsd</h1>
      <LoginContext.Provider value={{ username, setUserName, showProfile, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;

// The Basic Idea is to create a global context and pass all the states through the context to whichever Components needs those states
// Not the most ideal way but the most beginner way to make the states global
