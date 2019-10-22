import React from 'react';
import axios from 'axios';
import FetchQuote from './components/FetchQuote';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuote: ''
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
    .then(response => response.data)
    .then(data => {
      this.setState({
        newQuote: data[0],
      });
    });
  }

  render () {
    return (
    <div className="App">
      <FetchQuote newQuote={this.state.newQuote} />
      <button type='button' onClick={this.getQuote}>Get quote</button>
    </div>

  )}
}

export default App;
