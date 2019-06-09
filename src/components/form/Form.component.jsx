import React, { useReducer, useEffect } from 'react';
import InputDropdown from '../input_dropdown/InputDropdown.component';
import Button from '../button/Button.component';
import { SystemTypeOptions, formatType } from '../../utils';
import styles from './Form.module.scss';

const Form = ({ title, onSubmit, formData: selectedDevice, toggleModal }) => {
  const [formData, updateFormData] = useReducer((formData, newFormData) => ({ ...formData, ...newFormData }), {
    systemName: String(),
    type: {},
    hddCapacity: String()
  });

  useEffect(() => {
    if (selectedDevice) updateFormData(selectedDevice);
  }, [selectedDevice]);

  const onFormChange = label => ({ target: { value } }) => {
    if (label === 'hddCapacity' && !new RegExp('^[0-9]+$').test(value)) return;
    updateFormData({ [label]: value });
  };

  return (
    <div className={styles.form}>
      <div className={styles.formHeader}>{title}</div>
      <div className={styles.body}>
        <form className={styles.formBody} onSubmit={() => onSubmit(formData)}>
          <label className={styles.label}>
            System Name:
            <input type="text" value={formData.systemName} onChange={onFormChange('systemName')} />
          </label>
          <label className={styles.label}>
            System Type:
            <InputDropdown options={SystemTypeOptions} value={formData.type.label} onChange={onFormChange('type')} />
          </label>
          <label className={styles.label}>
            HDD Capacity:
            <input type="text" value={formData.hddCapacity} onChange={onFormChange('hddCapacity')} />
          </label>
          <div className={styles.buttonContainer}>
            <Button
              label="Submit"
              onClick={() => {
                onSubmit({
                  device: formData,
                  ...(formData.index !== undefined && { index: formData.index })
                });
                toggleModal(false);
              }}
            />
            <Button label="Cancel" onClick={() => toggleModal(false)} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
