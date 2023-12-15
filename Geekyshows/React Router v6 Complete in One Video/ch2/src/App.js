import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
