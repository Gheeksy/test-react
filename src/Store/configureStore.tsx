import { createStore } from 'redux'
import cardsReducer from './Reducers/cards.reducer'

const store: ReturnType<typeof createStore> = createStore(
    cardsReducer
)

export default store;