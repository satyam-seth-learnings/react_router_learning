import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Post from './components/pages/Post';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Navbar from './components/Navbar';

function App() {
  const isLogin = false;
  // const isLogin = true;
  const data = {
    'st': 'User not logged in'
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<h1>Hello React Router</h1>} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post/:category' element={<Post />} />
          <Route path='/post/:category/:id' element={<Post />} />
          <Route path='/dashboard' element={isLogin ? <Dashboard /> : <Navigate to="/login" state={data} replace />} />
          <Route path='/login' element={<Login />} />
          
          <Route path='*' element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
