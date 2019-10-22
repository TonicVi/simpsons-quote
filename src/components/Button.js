import React from 'react';
import './Button.css'
import Button1 from './Button1';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        const count = this.state.count;
        this.setState({ count: count + 1 });
    }
    decrement() {
        const count = this.state.count;
        this.setState({ count: count - 1 });
    }
    render() {
        const count = this.state.count;
        return (
            <div>
                <Button1 increment={this.increment} />
                <p>How much do you love Bart? On a scale of -1000 to 1000</p>
                <p>{count}</p>
                <button className="Button" onClick={this.decrement}>
                    -
                </button>
            </div>
        );
    }
}
export default Counter;