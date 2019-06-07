import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './App.module.scss';
import { SideBar } from './components';
import { Dashboard } from './pages';

function App() {
  return (
    <div className={styles.root}>
      <SideBar />
      <div className={styles.content}>
        <Dashboard />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
