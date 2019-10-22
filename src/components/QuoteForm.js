import React from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30;
class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: '',
        };
        this.handleChange = this.handleChange.bind(this)
        
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    
    handleChange(event) {
        if (event.target.value.length > MAX_LENGTH) {
            return;
        }
        this.setState({ character: event.target.value })
    }

    
    render() {
        const maxReached = this.state.character.length >= MAX_LENGTH;
        const numRemaining = MAX_LENGTH - this.state.character.length;
      return (
        <form
          className="QuoteForm"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="character">Character:</label>
          <input
            className= {maxReached ? 'length-max-reached' : 'length-ok'}
            id="name"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}
          />
          <p className="remaining-characters">{numRemaining} characters left</p>
          <p>You typed: {this.state.character}</p>
        </form>
      );
    }
  }
  
export default QuoteForm;