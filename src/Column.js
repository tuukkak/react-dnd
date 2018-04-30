import React from 'react';
import Card from './Card';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './constants';
import { moveCard } from './state';

const columnTarget = {
    drop(props) {
        moveCard(props.id);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class Column extends React.Component {
    renderCard() {
        const { id, cardPosition } = this.props;
        return cardPosition === id && <Card />;
    }

    render() {
        const { connectDropTarget, isOver } = this.props;
        return connectDropTarget(
            <div className="column">
                <div className="column--container">{this.renderCard()}</div>
            </div>
        );
    }
}

export default DropTarget(ItemTypes.CARD, columnTarget, collect)(Column);
