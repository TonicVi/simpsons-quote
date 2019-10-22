import React from 'react';
import Navbar from './components/Navbar'
// import './App.css';
// import Counter from './components/Button';
// import QuoteCard from './components/QuoteCard'
// import Avatar from './Avatar' 
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';



function App() {
//   const bart = {
//     image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
//     firstName: "Bart",
//     lastName: "Simpson",
//     star: true
// }
//   const nelson = {
//       image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
//       firstName: "Nelson",
//       lastName: "Muntz"
//   }
//   const lisa =  {
//     image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
//     firstName: "Lisa",
//     lastName: "Simpson"
//   }
  return (
    <div className="App">
      <Navbar />
      <QuoteForm />
      <QuoteList />
      {/* <Counter /> */}
      {/* <Avatar {...bart}/>
      <Avatar {...nelson}/>
      <Avatar {...lisa}/> */}
      

      {/*
      <Avatar 
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      firstName="Homer"
      lastName="Simpson"/>  */}
      
    </div>

  );
}

export default App;
