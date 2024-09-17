import dotenv from 'dotenv';
import { serverConfig } from './server.config';

dotenv.config();

export const config = {
  common: {
    defaultLocale: 'ru',
  },
  server: serverConfig(process.env),
};