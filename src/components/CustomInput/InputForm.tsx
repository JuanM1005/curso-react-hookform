import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';

interface CustomInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: string;
  error?: FieldError;
}

const InputForm = <T extends FieldValues>({
name,
  control,
  label,
  type = 'text',
  error,
}: CustomInputProps<T>) => {
  return (
    <Controller name={name}
      control={control}
      render={({ field }) => (
        <>
          <label htmlFor={name}>{label}</label>
          <input id={name} {...field} type={type} placeholder={label} />
          {error && <span>{error.message}</span>}
        </>
      )}
    />
  );
};

export default InputForm;
