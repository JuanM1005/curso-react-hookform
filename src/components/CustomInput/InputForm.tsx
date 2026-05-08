import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';
import React from 'react';
import styles from './InputForm.module.css';

interface CustomInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: string;
  error?: FieldError;
  endAdornment?: React.ReactNode;
}

const InputForm = <T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  error,
  endAdornment,
}: CustomInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <label htmlFor={name}>{label}</label>
          <div className={styles.fieldWrapper}>
            <input id={name} {...field} type={type} placeholder={label} />
            {endAdornment}
          </div>
          {error && (
            <span className={styles.errorMessage}>{error.message}</span>
          )}
        </>
      )}
    />
  );
};

export default InputForm;
