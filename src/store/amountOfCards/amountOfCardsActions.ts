import { ActionCreator } from "redux";

export const SET_AMOUNT_OF_CARDS = 'SET_AMOUNT_OF_CARDS';

export type SetAmountOfCardsAction = {
  type: typeof SET_AMOUNT_OF_CARDS
  amount: number;
}

export const setAmountOfCards: ActionCreator<SetAmountOfCardsAction> = (amount) => ({
  type: SET_AMOUNT_OF_CARDS,
  amount
})
