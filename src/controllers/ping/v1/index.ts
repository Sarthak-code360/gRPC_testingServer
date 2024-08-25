import type { ConnectRouter, HandlerContext, MethodImpl } from '@connectrpc/connect';
import { PingService } from '../../../grpc/ping/v1/ping_connect.js';
import { PingRequest, PingResponse } from '../../../grpc/ping/v1/ping_pb.js';


const ping: MethodImpl<typeof PingService.methods.ping> = (req: PingRequest, context: HandlerContext): PingResponse => {
  return new PingResponse({
    message: `Pong ${req.message}`,
  });
};

export default (router: ConnectRouter) => router.service(PingService, { ping });
