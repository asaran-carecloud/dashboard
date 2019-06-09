import React from 'react';
import styles from './List.module.scss';
import Row from './row/Row.component';

const List = ({ data = [], deleteDevice, updateDevice }) => (
  <div className={styles.list}>
    <div className={styles.listHeader}>
      <div>System Name</div>
      <div>Type</div>
      <div>HDD Capacity</div>
      <div>Edit</div>
      <div>Delete</div>
    </div>
    {data.map(({ id, system_name, type, hdd_capacity }, index) => (
      <Row
        systemName={system_name}
        type={type}
        hddCapacity={hdd_capacity}
        id={id}
        index={index}
        deleteDevice={deleteDevice}
        updateDevice={updateDevice}
      />
    ))}
  </div>
);

export default List;
