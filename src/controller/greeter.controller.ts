import { IGreeterServer } from '../shared/grpc/greeter_grpc_pb';
import { HelloReply } from '../shared/grpc/greeter_pb';

export const GreeterController: IGreeterServer = {
  sayHello: (req, res) => {
    const name = req.request.getName();
    const reply = new HelloReply();
    reply.setMessage(`Привет, ${name}`);
    res(null, reply);
  }
};