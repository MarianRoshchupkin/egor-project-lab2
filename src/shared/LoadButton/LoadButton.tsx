import React from 'react';
import styles from './loadbutton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "../../store/reducer";
import {setAmountOfCards} from "../../store/amountOfCards/amountOfCardsActions";

export function LoadButton() {
  const amountOfCards = useSelector<IInitialState, number>(state => state.amount.amount);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setAmountOfCards(amountOfCards + 50));
  }

  return (
    <div className={styles.loadButton}>
      <button className={styles.button} onClick={handleClick}>
        <span className={styles.desc}>Показать еще</span>
      </button>
    </div>
  );
}
