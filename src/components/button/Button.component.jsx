import React from 'react';
import styles from './Button.module.scss';

const Button = ({ label, onClick }) => (
  <div className={styles.button} role="button" onClick={onClick}>
    {label}
  </div>
);

export default Button;
