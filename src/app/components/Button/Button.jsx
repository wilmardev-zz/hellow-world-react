import React, { Component } from 'react';

class Button extends Component {

    onClickButton(event) {
        console.log('Hello from React Button');
        alert('Hello from React Button!');
    }

    render() {
        return (
            <div>
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