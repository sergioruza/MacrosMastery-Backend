import { Request, Response } from 'express';
import WeightHistoryService from '../../service/anthropometry/WeightHistoryService';
import IWeightHistory from '../../interfaces/IWeightHistory';

export default class WeightHistoryController {
  private _weightService: WeightHistoryService = new WeightHistoryService();

  async create(req: Request, res: Response) {
    const { userId, weight, date } = req.body as IWeightHistory;

    const createWeight = await this._weightService.create({ userId, weight, date });

    return res.status(201).json(createWeight);
  }
}
