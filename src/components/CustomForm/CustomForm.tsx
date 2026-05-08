import { zodResolver } from '@hookform/resolvers/zod/src/index.js';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerSchema, RegisterForm } from '../schemas';
import InputForm from '../CustomInput/InputForm';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './CustomForm.module.css';

const CustomForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  });

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    console.log(data);
  };

  const passwordToggleButton = (
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className={styles.toggleButton}
    >
      {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
    </button>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputForm<RegisterForm>
        name="name"
        control={control}
        label="Nombre"
        type="text"
        error={errors.name}
      />
      <InputForm<RegisterForm>
        name="email"
        control={control}
        label="Email"
        type="email"
        error={errors.email}
      />
      <InputForm<RegisterForm>
        name="password"
        control={control}
        label="Contraseña"
        type={showPassword ? 'text' : 'password'}
        error={errors.password}
        endAdornment={passwordToggleButton}
      />
      <InputForm<RegisterForm>
        name="confirmPassword"
        control={control}
        label="Confirmar Contraseña"
        type={showPassword ? 'text' : 'password'}
        error={errors.confirmPassword}
        endAdornment={passwordToggleButton}
      />

      <button type="submit" className={styles.submitButton}>
        Registrarse
      </button>
    </form>
  );
};

export default CustomForm;
