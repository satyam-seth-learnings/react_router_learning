import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Post from './components/pages/Post';
import PostDetail from './components/pages/PostDetail';
import Layout from './components/Layout';
import PostLayout from './components/PostLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='post' element={<PostLayout />} >
              <Route path=":category" element={<PostDetail />} />
              <Route index element={<Post />} />
            </Route>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<h1>Error 404 Page not Found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
