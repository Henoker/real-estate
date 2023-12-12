import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from './components/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ActivatePage from './pages/ActivatePage';
import PropertyPage from './pages/PropertyPage';
import ProfilePage from './pages/ProfilePage';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/properties' element={<PropertiesPage/>}/>
            <Route path='/property/:slug' element={<PropertyPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/activate/:uid/:token' element={<ActivatePage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
          <ToastContainer theme="dark" />
        </main>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
