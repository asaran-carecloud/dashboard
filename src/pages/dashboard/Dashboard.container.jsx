import React, { useState, useEffect, Fragment } from 'react';
import { toast } from 'react-toastify';
import ReactModal from 'react-modal';
import axios from 'axios';
import { Filters, List, Form } from '../../components';
import styles from './Dashboard.module.scss';

const DashboardContainer = () => {
  const [data, updateData] = useState([]);
  const [filteredData, updateFilteredData] = useState([]);
  const [modalOpen, toggleModal] = useState(false);
  const [formContext, setformContext] = useState({
    title: String(),
    formData: {},
    onSubmit: () => {}
  });

  useEffect(() => updateFilteredData(data), [data]);
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

  const updateDevice = async ({ device, index }) => {
    try {
      const { systemName, type, hddCapacity, id } = device;
      const formattedDevice = {
        id,
        system_name: systemName,
        type,
        hdd_capacity: hddCapacity
      };
      await axios.put(`http://localhost:3000/devices/${id}`, formattedDevice);
      const updatedData = [...data];
      updatedData[index] = formattedDevice;
      updateData(updatedData);
      toast.success(`Device successfully updated`);
    } catch (error) {
      toast.error(`Attempt to update device was unsuccessful: ${error}`);
    }
  };

  const createDevice = async ({ device }) => {
    try {
      const { systemName, type, hddCapacity } = device;
      const formattedDevice = {
        system_name: systemName,
        type: type,
        hdd_capacity: hddCapacity
      };
      await axios.post(`http://localhost:3000/devices`, formattedDevice);
      const updatedData = [...data, formattedDevice];
      updateData(updatedData);
    } catch (error) {
      toast.error(`Attempt to add new device was unsuccessful: ${error}`);
    }
  };

  const openModal = ({ title, formData, onSubmit, index }) => {
    setformContext({
      title,
      ...(formData && { formData }),
      ...(index && { index }),
      onSubmit: {
        UPDATE: updateDevice,
        CREATE: createDevice
      }[onSubmit]
    });
    toggleModal(true);
  };

  const filterSortData = ({ deviceType, sortProp }) => {
    if (deviceType) updateFilteredData(data.filter(({ type }) => type === deviceType));
    if (sortProp) {
      const sortedArray = [...data];
      sortedArray.sort((a, b) => {
        if (sortProp === 'NAME') {
          if (a.system_name.toUpperCase() < b.system_name.toUpperCase()) return -1;
          if (b.system_name.toUpperCase() < a.system_name.toUpperCase()) return 1;
          return 0;
        }
        if (sortProp === 'HDD') {
          return parseInt(a.hdd_capacity) - parseInt(b.hdd_capacity);
        }
      });
      updateFilteredData(sortedArray);
    }
  };

  return (
    <Fragment>
      <div className={styles.title}>Dashboard</div>
      <div className={styles.divider} />
      <Filters createDevice={openModal} filterSortData={filterSortData} resetFilters={() => updateFilteredData(data)} />
      <List data={filteredData} deleteDevice={deleteDevice} updateDevice={openModal} />
      <ReactModal
        className={styles.modal}
        isOpen={modalOpen}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => toggleModal(false)}
      >
        <Form
          title={formContext.title}
          formData={formContext.formData}
          onSubmit={formContext.onSubmit}
          toggleModal={toggleModal}
        />
      </ReactModal>
    </Fragment>
  );
};

export default DashboardContainer;
