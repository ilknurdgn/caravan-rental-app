import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import { useState } from 'react';
import Register from './pages/Register/Register';

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className='main'>
      {user && <Navbar />}
      <Register />
      {user && <Footer />}
    </div>
  );
}

export default App;
