import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

import Select from '../../elements/SelectDropdown';

export default function Action(props) {
  const { handleChange } = props;
  const { provinces } = useSelector((s) => s.case);

  return (
    <section className={styles.action}>
      <p>Pilih Berdasarkan Provinsi</p>
      <Select
        data={[{ value: 'Semua Data' }, ...provinces]}
        handleChange={handleChange}
      />
    </section>
  );
}
