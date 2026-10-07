import { Router } from 'express';
import {
  handleSearchDiscovery,
  handleGetDiscoveryEntityById,
  handleGetDiscoveryConnections
} from './discovery.controller.js';

export const discoveryRouter = Router();

discoveryRouter.get('/', handleSearchDiscovery);
discoveryRouter.get('/search', handleSearchDiscovery);
discoveryRouter.get('/entities/:id', handleGetDiscoveryEntityById);
discoveryRouter.get('/entities/:id/connections', handleGetDiscoveryConnections);
