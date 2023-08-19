export default interface IWeightHistory {
  id?: number;
  userId: number;
  weight: number;
  date: string;
  updatedAt?: string;
  created_at?: string;
  // eslint-disable-next-line semi
}
