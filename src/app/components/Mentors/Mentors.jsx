import React, { Component } from 'react'

class Mentors extends Component {
    render() {
        const mentors = ['Meli', 'Cristian', 'Santi', 'Laura', 'Juan']
        return (
            <div> Mentors:
                <ul>
                    {mentors.map((name, index) => {
                        return <li key={index}>{name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Mentors;