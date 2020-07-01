import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

export default function PageBase({ children }) {
  return (
    <>
      <header>
        <div>
          <img
            src={require('../../../assets/illu_virus.svg')}
            alt="virus"
            className={styles.icon}
          />
          <h1>Indonesia Covid Statistic</h1>
        </div>
        <h3>{new Date().toDateString()}</h3>
      </header>
      <main className={styles.content}>{children}</main>
      <footer>
        <h5>Created by Ilham A. Malik | Front End Developer</h5>
      </footer>
    </>
  );
}

PageBase.defaultProps = {
  children: null,
};

PageBase.propTypes = {
  children: PropTypes.node,
};
