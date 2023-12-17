import {amountOfCardsReducer, IAmountOfCardsState} from "./amountOfCards/amountOfCardsReducer";
import {SetAmountOfCardsAction} from "./amountOfCards/amountOfCardsActions";

export interface IInitialState {
  amount: IAmountOfCardsState;
}

export const initialState: IInitialState = {
  amount: {
    amount: 50
  }
}

type Actions = SetAmountOfCardsAction

export const rootReducer = (state = initialState, action: Actions): IInitialState => {
  switch (action.type) {
    case "SET_AMOUNT_OF_CARDS":
      return {
        ...state,
        amount: amountOfCardsReducer(state.amount, action)
      }
    default:
      return state;
  }
}
