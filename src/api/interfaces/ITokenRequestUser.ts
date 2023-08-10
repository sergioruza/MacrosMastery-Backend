import { Request } from 'express';
import { IUserToken } from './User';

export interface ITokenRequestUser extends Request {
  user?: IUserToken;
}
