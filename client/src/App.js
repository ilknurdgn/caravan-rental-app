import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="main">
      <Login />
      {/* <Navbar />
      <Footer /> */}
    </div>
  );
}

export default App;
