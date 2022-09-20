import React from 'react'; // rafce create a simple react component

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components'
import './App.scss';


//Add all of our containers and single component
const App = () => {
  return (
    <div className='app'> 
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;