import React from 'react';
// Import Global Style
import GlobalStyle from './components/GlobalStyle';
// Import pages
import Aboutus from './pages/Aboutus';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Aboutus/>
    </div>
  );
}

export default App;
