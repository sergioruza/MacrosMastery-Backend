import WeightHistory from '@/src/database/models/WeightHistoryModel';
import { ModelStatic } from 'sequelize';

export default class WeightHistoryService {
  protected weightModel: ModelStatic<WeightHistory> = WeightHistory;
}
