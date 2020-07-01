import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

export default function Daily() {
  const [cardData, setData] = useState({});
  const { daily } = useSelector((s) => s.case);

  useEffect(() => {
    if (daily.length) {
      if (daily[daily.length - 1].total) {
        setData(daily[daily.length - 1]);
      } else {
        setData(daily[daily.length - 2]);
      }
    }
  }, [daily]);

  return (
    <section className={styles['daily']}>
      <div className={styles['top']}>
        <h2>Daily Stats</h2>
        <SimpleCard title="Jumlah" data={cardData.kasusBaru} />
        <SimpleCard title="Sembuh" data={cardData.sembuhBaru} />
        <SimpleCard title="Meninggal" data={cardData.meninggalBaru} />
        <CardText title="ODP" data={cardData.odp} />
        <CardText title="PDP" data={cardData.pdp} />
      </div>
      <div className={styles['bottom']}>
        <p>Last Update: {cardData.tanggal}</p>
      </div>
    </section>
  );
}

export function CardText({ title, data }) {
  return (
    <div className={styles['text-card']}>
      <h3>
        {title} : {data}
      </h3>
    </div>
  );
}

export function SimpleCard(props) {
  const { title, data } = props;

  return (
    <div className={styles['simple-card']}>
      <h3>{title}</h3>
      <h2>+{data}</h2>
    </div>
  );
}
