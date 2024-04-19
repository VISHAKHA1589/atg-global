import React from 'react';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import FeedButtons from './components/FeedButtons';
import FeedPage from './components/FeedPage';



function App() {
  return (
    <div className=''>
     <Navigation/>
     <Hero/>
     <FeedButtons/>
     <FeedPage/>
    </div>
  );
}

export default App;
