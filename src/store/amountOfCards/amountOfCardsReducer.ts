import {initialState} from "../reducer";
import {SET_AMOUNT_OF_CARDS, SetAmountOfCardsAction} from "./amountOfCardsActions";

export interface IAmountOfCardsState {
  amount: any;
}

type AmountOfCardsActions = SetAmountOfCardsAction;

export const amountOfCardsReducer = (state = initialState.amount.amount, action: AmountOfCardsActions): IAmountOfCardsState => {
  switch (action.type) {
    case SET_AMOUNT_OF_CARDS:
      return {
        ...state,
        amount: action.amount
      }
    default:
      return state;
  }
}
