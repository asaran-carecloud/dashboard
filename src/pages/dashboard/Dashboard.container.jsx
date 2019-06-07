import React, { memo, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import DashboardComponent from './Dashboard.component';

const DashboardContainer = memo(() => {
  const [data, updateData] = useState({});
  const getData = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000', {});
      updateData({ data });
    } catch (error) {
      toast.error(`Attempt to get data was unsuccessful: ${error}`);
    }
  };

  return <DashboardComponent />;
});

export default DashboardContainer;
