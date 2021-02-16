interface CardsState {
    cards: Array<{type: string, state: string}>
}

interface SetCardsAction {
    type: string,
    payload: Array<{type: string, state: string}>
}

type CardsActionTypes = SetCardsAction;

const initialState: CardsState = {
    cards: [],
};

function cardsReducer(state = initialState, action: CardsActionTypes): CardsState {
    switch (action.type) {
        case 'SET_CARDS':
            return {
                ...state,
                cards: [...action.payload]
            }
        default:
            return state
    }
}

export default cardsReducer;