import React from 'react';
import Navbar from './components/Navbar'
import QuoteCard from './components/QuoteCard'
 

function App() {
  return (
    <div>
      <Navbar />
      <QuoteCard 
      quote="Shoplifting is a victimless crime, like punching someone in the dark."
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
      character="Nelson Muntz"/>
      <QuoteCard
      quote="Shut up, brain. I got friends now. I don't need you anymore."
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083"
      character="Lisa Simpson" />
      <QuoteCard
      quote="Oh, so they have Internet on computers now!"
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      character="Homer Simpson" />
   
    </div>

  );
}

export default App;
