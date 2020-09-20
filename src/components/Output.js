import React, { Component } from 'react';
/* 
Aplica css utlizando className no resultado e mostra o resultado vindo de App.js */

export default class Output extends Component {
    render() {
        return (
            <div className="result">
                <p>{this.props.result}</p>
            </div>
        );
    }
}