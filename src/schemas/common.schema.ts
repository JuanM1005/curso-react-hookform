import { z } from 'zod';

// Este archivo contiene esquemas comunes que pueden ser reutilizados en diferentes partes de la aplicación, como el esquema de correo electrónico y contraseña, para evitar la duplicación de código y mantener una estructura más limpia y modular.

export const emailSchema = z
  .string()
  .email('El correo electrónico no es válido')
  .min(1, 'El correo electrónico es obligatorio');

export const passwordSchema = z
  .string()
  .min(6, 'La contraseña debe tener al menos 6 caracteres');
