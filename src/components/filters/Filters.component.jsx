import React from 'react';
import styles from './Filters.module.scss';
import InputDropdown from '../input_dropdown/InputDropdown.component';
import Button from '../button/Button.component';
import { SystemTypeOptions } from '../../utils';

const Filters = ({ createDevice, filterSortData, resetFilters }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.dropdownColumn}>
        <div>Device Type</div>
        <InputDropdown
          onChange={({ target: { value } }) => filterSortData({ deviceType: value })}
          options={SystemTypeOptions}
        />
      </div>
      <div className={styles.dropdownColumn}>
        <div>Sort by</div>
        <InputDropdown
          onChange={({ target: { value } }) => filterSortData({ sortProp: value })}
          options={[{ label: 'HDD Size', value: 'HDD' }, { label: 'System Name', value: 'NAME' }]}
        />
      </div>
      <div className={styles.dropdownColumn}>
        <div style={{ height: 18 }} />
        <Button label="Reset" onClick={() => resetFilters()} />
      </div>
      <div className={styles.dropdownColumn}>
        <div style={{ height: 18 }} />
        <Button label="Add" onClick={() => createDevice({ title: 'Add a Device', onSubmit: 'CREATE' })} />
      </div>
    </div>
  );
};

export default Filters;
