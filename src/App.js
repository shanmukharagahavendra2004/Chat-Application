 import "./index.css";
 import LoginPage from "./pages/LoginPage.jsx";
 import HomePage from "./pages/HomePage.jsx";
 import {useAuthState} from "react-firebase-hooks/auth";
 import {auth} from "./firebase.js";
function App() {
  const [user]=useAuthState(auth);
  return (
    <div className="App">
    {!user?<LoginPage/>:<HomePage/>}
    </div>
  );
}

export default App;


