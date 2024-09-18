import * as grpc from '@grpc/grpc-js';
import { GreeterService } from './shared/grpc/greeter_grpc_pb';
import { loggerInstance } from './shared/logger';
import { config } from './config';
import { GreeterController } from './controller/greeter.controller';

const HOST = config.server.host;
const PORT = config.server.port;
const logger = loggerInstance();

const index = new grpc.Server();
index.addService(GreeterService, GreeterController);
index.bindAsync(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      logger.error('Ошибка: ', err.message);
      return;
    }
    logger.info(`Сервер запущен на ${HOST}:${port}`);
  }
);
