import { createStore } from 'redux'
import cardsReducer from './Reducers/cards.reducer'

const store = createStore(
    cardsReducer
)

export default store;