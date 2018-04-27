import React from 'react';
import Header from './Header';
import Board from './Board';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Board />
            </div>
        );
    }
}
