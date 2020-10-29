import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Car from './components/car';
import Contact from './components/contact';
import Search from './components/search';
import Information from './components/information';
import Location from './components/information';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './image-gallery.css';

function App() {
  return (
  <Router>
      <Switch>
             <Route exact path="/">
                {create_page(<Home />)}
             </Route>

             <Route path="/about">
                {create_page(<About />)}
              </Route>

              <Route path="/car">
                {create_page(<Car />)}
              </Route>

              <Route path="/contact">
                {create_page(<Contact />)}
              </Route>

              <Route path="/search">
                {create_page(<Search />)}
                </Route>

              <Route path="/location">
                {create_page(<Location />)}
                </Route>

              <Route path="/information">
                {create_page(<Information />)}
                </Route>
          </Switch>
      </Router>




  );
}

function create_page(page) {
    return (
    <div className="App">
         <Header />
      <div class = "page">
        {page}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>)
  }

export default App;
