import React, { memo } from 'react';
import styles from './SideBar.module.scss';

const SideBar = memo(() => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.title}>
        <p>NinjaRMM</p>
      </div>
      <div />
    </div>
  );
});

export default SideBar;
