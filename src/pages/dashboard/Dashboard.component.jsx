import React, { memo, Fragment } from 'react';
import { Filters } from '../../components';
import styles from './Dashboard.module.scss';

const DashboardComponent = memo(() => (
  <Fragment>
    <div className={styles.title}>Dashboard</div>
    <div className={styles.divider} />
    <Filters />
  </Fragment>
));

export default DashboardComponent;
