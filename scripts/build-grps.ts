import { execSync } from 'child_process';
import { loggerInstance } from '../src/shared/logger';

const logger = loggerInstance('BUILD GRPS');

const runCommand = (command: string) => {
  logger.info(command);
  execSync(command, { stdio: 'inherit' });
};

const PROTO_PATH = './src/protos';
const GENERATED_PATH = './src/shared/grpc';

(() => {
  try {
    runCommand('set -ex'); // Установка флага для вывода команд и остановки на ошибке
    runCommand(
      'grpc_tools_node_protoc ' +
      `--ts_out=grpc_js:${GENERATED_PATH} ` +
      `--js_out=import_style=commonjs,binary:${GENERATED_PATH} ` +
      `--grpc_out=grpc_js:${GENERATED_PATH} ` +
      `--proto_path=${PROTO_PATH} ${PROTO_PATH}/*.proto`
    );
  } catch (error: any) {
    logger.error(error.message);
    process.exit(1);
  }
})();