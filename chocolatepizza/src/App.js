import React from 'react';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'
import logo from './mainlogo.png'
import socialMediaLinks from './socialMediaLinks.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo} links={socialMediaLinks}/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
