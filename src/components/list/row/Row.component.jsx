import React, { Fragment } from 'react';
import styles from './Row.module.scss';

const Row = ({ systemName, type, hddCapacity, edit, deleteDevice, key, id }) => {
  const formatType = type =>
    ({
      WINDOWS_WORKSTATION: 'Windows Workstation',
      WINDOWS_SERVER: 'Windows Server',
      MAC: 'Mac'
    }[type]);
  return (
    <Fragment>
      <div className={styles.row}>
        <div>{systemName}</div>
        <div>{formatType(type)}</div>
        <div>{hddCapacity + ' GB'}</div>
        <i class="material-icons" onClick={() => edit(key)}>
          edit
        </i>
        <i class="material-icons" onClick={() => deleteDevice(id)}>
          delete
        </i>
      </div>
    </Fragment>
  );
};

export default Row;
