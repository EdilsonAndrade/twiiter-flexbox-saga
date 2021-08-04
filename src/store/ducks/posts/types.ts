import { IUser } from '../users/types';

export enum PostTypes {
  LOAD_REQUEST = 'post/LOAD_REQUEST',
  LOAD_SUCCESS = 'post/LOAD_SUCCESS',
  LOAD_ERROR = 'post/LOAD_ERROR',
  SAVE_REQUEST = 'post/SAVE_REQUEST',
  SAVE_SUCCESS = 'post/SAVE_SUCCESS',
  DELETE_REQUEST = 'post/DELETE_REQUEST',
  DELETE_SUCCCESS = 'post/DELETE_SUCCESS',
  EDIT_REQUEST = 'post/EDIT_REQUEST',
  EDIT_SUCCESS = 'post/EDIT_SUCCESS',
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: IUser;
  onEdition?: boolean;
}

export interface IPostState {
  readonly data: IPost[];
  readonly loading: boolean;
}
