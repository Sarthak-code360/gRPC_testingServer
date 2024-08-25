import type { ConnectRouter } from '@connectrpc/connect';
import { connectNodeAdapter } from '@connectrpc/connect-node';
import { pingService } from './controllers/index.js';

export default connectNodeAdapter({
  routes: (router: ConnectRouter) => {
    pingService(router);
  }
});
