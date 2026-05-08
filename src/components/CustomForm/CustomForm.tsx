import { zodResolver } from '@hookform/resolvers/zod/src/index.js';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerSchema, RegisterForm } from '../../schemas/';
import InputForm from '../CustomInput/InputForm';
import { useState } from 'react';
import { set } from 'zod';

const CustomForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  }

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      />
      <InputForm<RegisterForm>
        name="confirmPassword"
        control={control}
        label="Confirmar Contraseña"
        type={showPassword ? 'text' : 'password'}
        error={errors.confirmPassword}
      />

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default CustomForm;
