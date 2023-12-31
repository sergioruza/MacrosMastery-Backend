export interface IUser {
  id?: number;
  name: string;
  username: string;
  email: string;
  password: string;
  // eslint-disable-next-line semi
}

export interface IUserResponse {
  id?: number;
  name: string;
  username: string;
  email: string;
}

export interface IUserToken {
  id: number;
  email: string;
  name: string;
  username: string;
}
