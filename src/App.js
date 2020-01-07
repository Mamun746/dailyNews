import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
// Container
import Home from './container/Home'
import News from './container/News'
import GalleryItem from './container/GalleryItem'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Switch>
    <Route path="/news/:id" component={News}/>
    <Route path="/galleries/:id" component={GalleryItem}/>
    <Route exact path='/' component={Home}/>
    



    </Switch>
    <Footer/>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
