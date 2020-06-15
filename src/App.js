import React from 'react';
import './App.scss';
import { Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

return (
<Router>
  <div className="App">
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contakt</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>
      </div>
    </div>
  </Router>
   
  );
}

export default App;
