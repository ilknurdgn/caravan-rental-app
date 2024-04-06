import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="main">
      {user && <Navbar />}
      <Login />
      {user && <Footer />}
    </div>
  );
}

export default App;
