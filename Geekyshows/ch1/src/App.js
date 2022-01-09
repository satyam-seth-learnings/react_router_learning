import './App.css';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Post from './components/pages/Post';
import Dashboard from './components/pages/Dashboard';
import Error from './components/pages/Error';
import Navbar from './components/Navbar';

function App() {
  // let isLogged=true;
  let isLogged=false;

  return (
    <>
      {/* <Navbar/> */}
      {/* <BrowserRouter>
        <Navbar/>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route  component={Error}/>
      </BrowserRouter> */}

      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" exact component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          {/* <Route exact path="/contact">
            <Contact company_name="GeekyShows"/>
          </Route> */}
          {/* <Route exact path="/contact" render={()=>{<Contact company_name="GeekyShows"/>}}/> */}
          <Route exact path="/post/:category" component={Post}/>
          <Route exact path="/post/:category/:id" component={Post}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/login">
            {isLogged?<Redirect to="/dashboard"/>:<Home/>}
          </Route>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
