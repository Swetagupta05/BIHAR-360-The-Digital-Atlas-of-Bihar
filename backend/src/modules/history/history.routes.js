import { Router } from 'express';
import {
  handleGetAllHistoryEras,
  handleGetHistoryEraById,
  handleGetAllHistoryEvents,
  handleGetHistoryEventById
} from './history.controller.js';

export const historyRouter = Router();

historyRouter.get('/eras', handleGetAllHistoryEras);
historyRouter.get('/eras/:id', handleGetHistoryEraById);
historyRouter.get('/events', handleGetAllHistoryEvents);
historyRouter.get('/events/:id', handleGetHistoryEventById);
