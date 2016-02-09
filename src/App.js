import React, { Component } from 'react';

// Base Style Import
import './scss/base.scss';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <div className='app-container'>
                <h1>React Boilerplate</h1>
            </div>
        );
    }
}
