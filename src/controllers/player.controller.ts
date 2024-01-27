import { Request, Response } from "express";
import { createRandomPlayer, createRandomPlayersList } from "../services/player.service";
import { httpStatusCode } from "../enums/httpStatusCode";

export async function createRandomPlayerController(_: Request, res: Response): Promise<Response> {
  try {
    const player = createRandomPlayer();
    return res.status(httpStatusCode.CREATED).send(player);
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function createRandomPlayersListController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { amount } = req.body;
    if (Number(amount) > 500) {
      return res.status(httpStatusCode.BAD_REQUEST).send({
        msg: 'Max value is 500'
      });
    }
    const players = createRandomPlayersList(Number(amount));
    return res.status(httpStatusCode.CREATED).send(players);
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(error);
  }
}