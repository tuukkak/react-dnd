import React from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './constants.js';

const cardSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

class Card extends React.Component {
    render() {
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(<div className="card">Move me!</div>);
    }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
