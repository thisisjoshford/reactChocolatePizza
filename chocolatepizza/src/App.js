import React from 'react';
import Header from './Header.js'
import Body from './Body.js'
import Bio from './Bio.js'
import Ingredients from './Ingredients.js'
import Footer from './Footer.js'
import logo from './mainlogo.png'
import smLinks from './smLinks.js'
import info from './info.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header mainLogo={logo} links={smLinks}/>
      <Body text={info}/>
      <Ingredients/>
      <Bio/>
      <Footer />
    </div>
  );
}

export default App;
