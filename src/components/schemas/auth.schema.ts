import { z } from 'zod';
import { emailSchema, passwordSchema } from './common.schema';

export const registerSchema = z
  .object({
    name: z.string().min(1, 'El nombre es obligatorio'),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  }); // message es el mensaje de error personalizado, path es la ruta del campo que se marcará como errorE

export type RegisterForm = z.infer<typeof registerSchema>; // Exportamos el tipo RegisterForm que se infiere del esquema registerSchema, esto nos permite usar este tipo en otras partes de la aplicación para tipar los datos del formulario de registro.
