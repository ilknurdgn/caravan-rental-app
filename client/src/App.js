import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import HowToRent from './pages/HowToRent/HowToRent';
import { useContext, useState } from 'react';
import Caravans from './pages/caravans/Caravans';
import About from './pages/About/About';
import { Context } from './context/Contex';
import SingleCaravan from './pages/single/SingleCaravan';
import Favorites from './pages/favorites/Favorites';
import Blogs from './pages/blogs/Blogs';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Write from './pages/write/Write';
import Profile from './pages/Profile/Profile';
import PersonalInformation from './pages/PersonalInformation/PersonalInformation';
import RegisteredCards from './pages/RegisteredCards/RegisteredCards';
import Approval from './pages/approval/Approval';
import Payment from './pages/payment/Payment';

function App() {
  const { user } = useContext(Context);
  return (
    <div className='main'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route
            path='/profile/personal-information'
            element={<PersonalInformation />}
          />
          <Route
            path='/profile/registered-cards'
            element={<RegisteredCards />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/how-to-rent' element={<HowToRent />} />
          <Route path='/caravans' element={<Caravans />} />
          <Route path='/caravan/:id' element={<SingleCaravan />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/:id' element={<SingleBlog />} />
          <Route path='/blog/write' element={<Write />} />
          <Route path='/approval/:id' element={<Approval />} />
          <Route path='/payment/:id' element={<Payment />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
