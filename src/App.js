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
import {Switch,Route,useLocation} from 'react-router-dom'; //useLocation is for completely check the user is in which react tree location
// Framer Motion
import {AnimatePresence} from 'framer-motion';
function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      
       <GlobalStyle/>
       <Nav/>
       <AnimatePresence exitBeforeEnter>
         <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
