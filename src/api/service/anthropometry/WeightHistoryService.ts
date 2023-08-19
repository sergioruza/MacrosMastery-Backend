import WeightHistory from '@/src/database/models/WeightHistoryModel';
import { ModelStatic } from 'sequelize';
import { InternalServerError } from '../../helpers/api-erros';
import IWeightHistory from '../../interfaces/IWeightHistory';

export default class WeightHistoryService {
  protected weightModel: ModelStatic<WeightHistory> = WeightHistory;

  async create({ userId, weight, date }: IWeightHistory) {
    const createWeight = await this.weightModel.create({ userId, weight, date });

    if (!createWeight) throw new InternalServerError('An error occurred while registering the weight');

    return createWeight;
  }
}
