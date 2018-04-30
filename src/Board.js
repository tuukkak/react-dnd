import React from 'react';
import Column from './Column';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <Column id={1} {...this.props} />
                <Column id={2} {...this.props} />
                <Column id={3} {...this.props} />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Board);
