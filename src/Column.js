import React from 'react';
import Card from './Card';

export default class Column extends React.Component {
    render() {
        return (
            <div className="column">
                <div className="column--container">
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}
