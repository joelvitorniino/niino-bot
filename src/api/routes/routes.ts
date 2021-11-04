import express from 'express';
import NiinoController from '../../db/controllers/NiinoController';

const Niino = new NiinoController();

const routes = express.Router();

routes.post('/block', Niino.create);
routes.delete('/delete', Niino.delete);

export default routes;