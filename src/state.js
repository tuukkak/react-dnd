let cardLocation = 1;

let observer = null;

function emitChange() {
    observer(cardLocation);
}

export function observe(o) {
    if (observer) {
        throw new Error('Multiple observers not implemented.');
    }

    observer = o;
    emitChange();
}

export function moveCard(boardId) {
    cardLocation = boardId;
    emitChange();
}
