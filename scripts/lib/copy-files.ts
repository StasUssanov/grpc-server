import * as fs from 'fs';
import * as path from 'path';
import { globSync } from 'glob';
import { loggerInstance } from '../../src/shared/logger';

const logger = loggerInstance('COPY FILES');

/**
 * Копирование файлов по маске
 * @param pattern - маска для поиска файлов
 * @param destDir - директория, куда копировать файлы
 * @example
 * const pattern = './source/*.txt';  // Маска файлов
 * const destDir = './destination';  // Директория назначения
 *
 * copyFiles(pattern, destDir);
 */
export const copyFiles = (pattern: string | string[], destDir: string): void => {
  const files = globSync(pattern);

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  files.forEach((file) => {
    const destFile = path.join(destDir, path.basename(file));
    try {
      fs.copyFileSync(file, destFile);
      logger.info(`Файл ${file} успешно скопирован в ${destFile}`);
    } catch (err) {
      logger.error(`Ошибка при копировании файла ${file}:`, err);
    }
  });

  logger.info('Количество скопированных файлов', files.length);
};