// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var greeter_pb = require('./greeter_pb.js');

function serialize_greeter_HelloReply(arg) {
  if (!(arg instanceof greeter_pb.HelloReply)) {
    throw new Error('Expected argument of type greeter.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_HelloReply(buffer_arg) {
  return greeter_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_HelloRequest(arg) {
  if (!(arg instanceof greeter_pb.HelloRequest)) {
    throw new Error('Expected argument of type greeter.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_HelloRequest(buffer_arg) {
  return greeter_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/greeter.Greeter/sayHello',
    requestStream: false,
    responseStream: false,
    requestType: greeter_pb.HelloRequest,
    responseType: greeter_pb.HelloReply,
    requestSerialize: serialize_greeter_HelloRequest,
    requestDeserialize: deserialize_greeter_HelloRequest,
    responseSerialize: serialize_greeter_HelloReply,
    responseDeserialize: deserialize_greeter_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
