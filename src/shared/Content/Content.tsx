import React from 'react';
import styles from './content.module.css';
import {useSelector} from "react-redux";
import {IInitialState} from "../../store/reducer";
import {Card} from "../Card";
import PorscheImage from '../../assets/images/porsche.jpg';
import {LoadButton} from "../LoadButton";

export function Content() {
  const amountOfCards = useSelector<IInitialState, number>(state => state.amount.amount);

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        {Array.from(Array(amountOfCards).keys()).map(() =>
          <Card
            image={PorscheImage}
            title="Porsche 911"
            desc="The 911 Carrera T is a commitment to purism."
            link="https://www.porsche.com/international/models/911/"
          />
        )}
      </div>
      <LoadButton />
    </div>
  );
}
