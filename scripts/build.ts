import { copyFiles } from './lib/copy-files';
import { execSync } from 'child_process';
import { loggerInstance } from '../src/shared/logger';

const logger = loggerInstance('BUILD');
const runCommand = (command: string) => {
  logger.info(command);
  execSync(command, { stdio: 'inherit' });
};

(() => {
  runCommand('set -ex'); // Установка флага для вывода команд и остановки на ошибке
  runCommand('tsc');
  copyFiles('./src/shared/grpc/**/*.js', './dist/shared/grpc/');
  logger.info('Сборка успешно завершена');
})();