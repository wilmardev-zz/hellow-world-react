import React, { Component } from 'react';
const mentors = ['One', 'Two', 'Three', 'Four', 'Five']

class Button extends Component {

    onClickButton(event) {
        console.log('Hello from React Button');
        alert('Hello from React Button!');
    }

    render() {
        return (
            <div>
                <ul>
                    {mentors.map((name, index) => {
                        return <li key={index}>{name}</li>
                    })}
                </ul>
                <button
                    className="btn btn-primary"
                    onClick={this.onClickButton}>
                    Click Me!
                </button>
            </div>
        );
    }
}

export default Button;