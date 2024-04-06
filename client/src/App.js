import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import HowToRent from './pages/HowToRent/HowToRent';

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className='main'>
      <Login />
      {/* <Navbar />
      <Footer /> */}
    </div>
  );
}

export default App;
