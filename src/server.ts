import * as grpc from '@grpc/grpc-js';
import { GreeterService } from './shared/grpc/greeter_grpc_pb';
import { HelloReply, HelloRequest } from './shared/grpc/greeter_pb';
import { loggerInstance } from './shared/logger';
import { config } from './config';

const HOST = config.server.host;
const PORT = config.server.port;
const logger = loggerInstance();

const sayHello: grpc.handleUnaryCall<HelloRequest, HelloReply> = (call, callback) => {
  const name = call.request.getName();
  const reply = new HelloReply();
  reply.setMessage(`Привет, ${name}`);
  callback(null, reply);
};

const server = new grpc.Server();
server.addService(GreeterService, {
  sayHello,
});

server.bindAsync(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    logger.error('Ошибка: ', err.message);
    return;
  }
  logger.info(`Сервер запущен на ${HOST}:${port}`);
});
