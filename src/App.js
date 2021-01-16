
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route exact path="/about" component={About} ></Route>
      <Route exact path="/contact" component={Contact} ></Route>
      <Route exact path="/services" component={Services} ></Route>
      <Redirect to="/" />
    </Switch>

    </>
  );
}

export default App;
