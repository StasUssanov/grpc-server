import type { Config } from './types';
import { Level } from 'log4js';

type ServerConfig = {
  host: string;
  port: number;
  logger: {
    level: Level | string;
  };
}

export const serverConfig: Config<ServerConfig> = (env) => ({
  host: env.SERVER_HOST ? env.SERVER_HOST : 'localhost',
  port: env.SERVER_PORT ? parseInt(env.SERVER_PORT) : 8080,
  logger: {
    level: env.LOGGER_LEVEL ? env.LOGGER_LEVEL : 'info',
  }
}) as const;