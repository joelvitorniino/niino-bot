import express from 'express';
import NiinoController from '../../controllers/NiinoController';

const Niino = new NiinoController();

const routes = express.Router();

routes.post('/block', Niino.create);
routes.delete('/delete', Niino.delete);
routes.post("/blockad", Niino.blockAd)

export default routes;