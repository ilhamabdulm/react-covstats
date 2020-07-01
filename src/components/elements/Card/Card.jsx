import React from 'react';
import PropTypes from 'prop-types';
import { useCountUp } from 'react-countup';

import styles from './styles.module.css';

export default function Card(props) {
  const { title, data, icon, variant } = props;
  const customClass = [styles.card, styles[variant]].filter(Boolean).join(' ');
  const { countUp } = useCountUp({
    start: 0,
    end: data,
    duration: 3.5,
  });

  return (
    <div className={customClass}>
      <div className={styles['card-body']}>
        <p>{title}</p>
        <h4>{countUp}</h4>
      </div>
      <div className={styles['card-icon']}>
        <img src={icon} alt={title} className={styles.image} />
      </div>
    </div>
  );
}

Card.defaultProps = {
  title: '',
  data: 0,
  icon: '',
  variant: 'green',
};

Card.propTypes = {
  title: PropTypes.string,
  data: PropTypes.number,
  icon: PropTypes.string,
  variant: PropTypes.string,
};
