import React from 'react';
import styles from './card.module.css';

interface ICardProps {
  image: string;
  title: string;
  desc: string;
  link: string;
}

export function Card({ image, title, desc, link }: ICardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={image} alt="Porsche 911" />
      </div>
      <div className={styles.text}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.desc}>{desc}</p>
        <a className={styles.link} href={link} target="_blank">
          <span className={styles.linkDesc}>Перейти</span>
        </a>
      </div>
    </div>
  );
}
