import React, { memo } from 'react';
import styles from './Filters.module.scss';
import InputDropdown from '../input_dropdown/InputDropdown.component';

const Filters = memo(() => {
  return (
    <div className={styles.filters}>
      <div className={styles.dropdownColumn}>
        <div>Device Type</div>
        <InputDropdown
          onChange={value => console.log(value)}
          options={[
            { label: 'Windows Workstation', value: 'WINDOWS_WORKSTATION' },
            { label: 'Mac', value: 'MAC' },
            { label: 'Windows Server', value: 'WINDOWS_SERVER' }
          ]}
        />
      </div>
      <div className={styles.dropdownColumn}>
        <div>Sort by</div>
        <InputDropdown options={[{ label: 'HDD Size', value: 'HDD' }, { label: 'System Name', value: 'NAME' }]} />
      </div>
    </div>
  );
});

export default Filters;
