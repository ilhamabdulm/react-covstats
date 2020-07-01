import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';
import Card from '../../elements/Card/Card';

export default function CaseStats({ isAll }) {
  const { data, loading, provinceData } = useSelector((s) => s.case);

  return (
    <section>
      <div className={styles['title']}>
        <h1>Case Statistic</h1>
        <h1>Total Case: {data ? data.totalKasus : '0'}</h1>
      </div>
      {!loading && data ? (
        <div className={styles['card-group']}>
          <Card
            title="Sembuh"
            data={data.sembuh}
            variant="green"
            icon={require('../../../assets/ic_recover.svg')}
          />
          <Card
            title="Aktif"
            data={data.aktif}
            variant="yellow"
            icon={require('../../../assets/ic_positive.svg')}
          />
          <Card
            title="Meninggal"
            data={data.meninggal}
            variant="red"
            icon={require('../../../assets/ic_death.svg')}
          />
        </div>
      ) : (
        <h2>Fetching information...</h2>
      )}
    </section>
  );
}
