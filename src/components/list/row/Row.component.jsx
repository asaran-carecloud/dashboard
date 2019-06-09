import React, { Fragment } from 'react';
import { formatType } from '../../../utils';
import styles from './Row.module.scss';

const Row = ({ systemName, type, hddCapacity, updateDevice, deleteDevice, index, id }) => {
  return (
    <Fragment>
      <div className={styles.row}>
        <div>{systemName}</div>
        <div>{formatType(type)}</div>
        <div>{hddCapacity + ' GB'}</div>
        <i
          class="material-icons"
          onClick={() =>
            updateDevice({
              title: 'Edit Device',
              formData: {
                id,
                systemName,
                hddCapacity,
                type: {
                  label: formatType(type),
                  value: type
                },
                index
              },
              onSubmit: 'UPDATE'
            })
          }
        >
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
