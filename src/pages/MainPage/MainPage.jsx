import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './styles.module.css';

import { getAllData, getProvinceData } from '../../store/actions';

import PageBase from '../../components/layouts/PageBase';
import CaseStats from '../../components/fragments/CaseStats';
import Action from '../../components/fragments/ActionGroup';
import GraphSection from '../../components/fragments/GraphSection';
import Daily from '../../components/fragments/DailyStats';

export default function MainPage() {
  const [province, setProvince] = useState('Keseluruhan');
  const [all, setAll] = useState(true);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    if (value === 'Semua Data' || value === 'Indonesia') {
      setProvince('Keseluruhan');
      dispatch(getAllData());
      setAll(true);
    } else {
      setProvince(value);
      dispatch(getProvinceData(value)).then(() => {
        setAll(false);
      });
    }
  };

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <PageBase>
      <main className={styles.main}>
        <CaseStats isAll={all} />
        <Action handleChange={handleChange} />
        <GraphSection active={province} isAll={all} />
      </main>
      <aside className={styles.side}>
        <Daily />
      </aside>
    </PageBase>
  );
}
