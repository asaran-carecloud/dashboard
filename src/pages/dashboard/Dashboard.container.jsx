import React, { memo, useState, useEffect, Fragment } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Filters, List } from '../../components';
import styles from './Dashboard.module.scss';

const DashboardContainer = memo(() => {
  const [data, updateData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/devices', {});
        updateData(data);
      } catch (error) {
        toast.error(`Attempt to get data was unsuccessful: ${error}`);
      }
    };
    getData();
  }, []);

  const deleteDevice = async deletedId => {
    try {
      await axios.delete(`http://localhost:3000/devices/${deletedId}`);
      const remainder = data.filter(({ id }) => id !== deletedId);
      updateData(remainder);
      toast.success('Device successfully deleted');
    } catch (error) {
      toast.error(`Attempt to delete device was unsuccesful: ${error}`);
    }
  };
  return (
    <Fragment>
      <div className={styles.title}>Dashboard</div>
      <div className={styles.divider} />
      <Filters />
      <List data={data} deleteDevice={deleteDevice} />
    </Fragment>
  );
});

export default DashboardContainer;
