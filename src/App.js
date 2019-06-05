import React from 'react';
import styles from './App.module.scss';
import { SideBar } from './components';

function App() {
  return (
    <div className={styles.root}>
      <SideBar />
      <div className={styles.content} />
    </div>
  );
}

export default App;
