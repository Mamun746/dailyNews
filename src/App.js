import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './container/Home'

import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Switch>
    <Route exact path='/' component={Home}/>
    



    </Switch>
    <Footer/>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
