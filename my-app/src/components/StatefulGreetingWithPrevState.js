import React from 'react';

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        }, () => {
            console.log('new state', this.state.introduction);
        });
    }

    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1,
        }));
    }

    render() {
        return (
        <div>
            <h1>{this.state.introduction} {this.props.greeting}</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            <p>Count: {this.state.count}</p>
            <button onClick={() => this.increment()}>Increment</button>
        </div>
        )
    }
}

export default StatefulGreetingWithPrevState;