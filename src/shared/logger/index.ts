import log4js from 'log4js';
import { config } from '../../config';

export const loggerInstance = (...category: string[]) => {
  const logger = log4js.getLogger(category.length ? category.map(item => `[${item}]`).join(' ') : '[SERVER]');
  logger.level = config.server.logger.level;
  return logger;
};
