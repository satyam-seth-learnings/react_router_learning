import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Post from './components/pages/Post';
import Navbar from './components/Navbar';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" exact component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/post/:category" component={Post}/>
          <Route exact path="/post/:category/:id" component={Post}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
