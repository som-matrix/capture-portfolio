import React from 'react';
// Import Global Style
import GlobalStyle from './components/GlobalStyle';
// Import pages
import Aboutus from './pages/Aboutus';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav'
import MovieDetails from './pages/MovieDetails';
// Router
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route path="/" exact>
          <Aboutus/>
        </Route>
        <Route path="/work" exact>
          <OurWork/>
        </Route>
        <Route path="/work/:id">
          <MovieDetails/>
        </Route>
        <Route path="/contact">
          <ContactUs/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
