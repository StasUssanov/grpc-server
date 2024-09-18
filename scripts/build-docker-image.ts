import { execSync } from 'child_process';
import { name, version } from '../package.json';
import { loggerInstance } from '../src/shared/logger';

const logger = loggerInstance('BUILD DOCKER IMAGE');

const GROUP = 'test';
const LOGIN = '';
const TOKEN = '';

const runCommand = (command: string) => {
  logger.info(command);
  execSync(command, { stdio: 'inherit' });
};

(() => {
  try {
    runCommand('set -ex'); // Установка флага для вывода команд и остановки на ошибке
    runCommand(`docker build --platform linux/amd64 -t "${name}":latest .`);
    runCommand(`docker tag "${name}":latest "${GROUP}/${name}":latest`);
    runCommand(`docker tag "${name}":latest "${GROUP}/${name}:${version}"`);
    // runCommand(`echo "${TOKEN}" | docker login --username ${LOGIN} --password-stdin`);
    // runCommand(`docker push "${dockerGroup}/${name}:latest"`);
    // runCommand(`docker push "${dockerGroup}/${name}:${version}"`);
  } catch (error: any) {
    logger.error(error.message);
    process.exit(1);
  }
})();