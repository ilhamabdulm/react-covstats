import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';
import Graph from '../../elements/Graph/Graph';

export default function GraphSection({ active, isAll }) {
  const { daily, data} = useSelector((s) => s.case);

  return (
    <section className={styles['graph-section']}>
      <h1>Grafik {active}</h1>
      <Graph data={isAll ? daily : data} isAll={isAll} />
    </section>
  );
}
