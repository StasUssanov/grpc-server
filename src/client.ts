import * as grpc from '@grpc/grpc-js';
import { GreeterClient } from './shared/grpc/greeter_grpc_pb';
import { HelloRequest } from './shared/grpc/greeter_pb';
import { config } from './config';
import { loggerInstance } from './shared/logger';

const HOST = config.server.host;
const PORT = config.server.port;
const logger = loggerInstance('CLIENT');

const request = new HelloRequest();
request.setName('Мир');

const client = new GreeterClient(`${HOST}:${PORT}`, grpc.credentials.createInsecure());
client.sayHello(request, (err, res) => {
  if (err) logger.error('Ошибка:', err.message);
  else logger.info('Ответ от сервера:', res.getMessage());
});