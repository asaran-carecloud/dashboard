import React from 'react';
import Select from 'react-select';
import styles from './InputDropdown.module.scss';

const InputDropdown = ({ options, onChange, value }) => {
  const customStyles = () => ({
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen && 'rotate(180deg)'
    })
  });
  return (
    <div className={styles.inputDropdownWrapper}>
      <Select
        options={options}
        styles={customStyles()}
        className={styles.dropdown}
        placeholder=""
        value={value}
        onChange={({ value }) => {
          onChange && onChange({ target: { value } });
        }}
      />
    </div>
  );
};

export default InputDropdown;
