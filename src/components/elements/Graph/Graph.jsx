import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import styles from './styles.module.css';

export default function Graph({ data, isAll }) {
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    if (isAll) {
      const lineGraphData = {
        labels: data.map((el) => el.tanggal),
        datasets: [
          {
            label: 'Jumlah Kasus',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#1468bd',
            borderColor: '#1468bd',
            borderDashOffset: 0.2,
            borderJoinStyle: 'miter',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data.map((el) => el.total),
          },
          {
            label: 'Pasien Sembuh',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#35962e',
            borderColor: '#35962e',
            borderDashOffset: 0.2,
            borderJoinStyle: 'miter',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data.map((el) => el.sembuh),
          },
          {
            label: 'Pasien Meninggal',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#d20707',
            borderColor: '#d20707',
            borderDashOffset: 0.2,
            borderJoinStyle: 'miter',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data.map((el) => el.meninggal),
          },
        ],
      };
      setGraphData(lineGraphData);
    } else {
      const barGraphData = {
        labels: ['Jumlah Kasus', 'Sembuh', 'Meninggal'],
        datasets: [
          {
            label: 'Pasien',
            backgroundColor: ['#1468bd', '#35962e', '#d20707'],
            data: [data.totalKasus, data.sembuh, data.meninggal],
          },
        ],
      };
      setGraphData(barGraphData);
    }
  }, [isAll, data]);

  return (
    <section className={styles['container']}>
      <div className={styles['graph']}>
        {isAll ? (
          <Line data={graphData} />
        ) : (
          <Bar data={graphData} options={{ legend: { display: false } }} />
        )}
      </div>
    </section>
  );
}
