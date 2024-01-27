import { Router } from 'express';
import { createRandomPlayerController, createRandomPlayersListController } from './controllers/player.controller';

const routes = Router();

routes.get("/create-player", createRandomPlayerController);
routes.post("/create-player-list", createRandomPlayersListController);

export { routes };
