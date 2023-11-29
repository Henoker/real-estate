import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
          <Routes>
            <Route path='/properties' element={<PropertiesPage/>}/>
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
