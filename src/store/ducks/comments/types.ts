export enum CommentTypes {
  DELETE_REQUEST = 'comment/DELETE_REQUEST',
  LOAD_REQUEST = 'comment/LOAD_REQUEST',
  LOAD_SUCCESS = 'comment/LOAD_SUCCESS',
  SAVE_REQUEST = 'comment/SAVE_REQUEST',
  EDIT_REQUEST = 'comment/EDIT_REQUEST',
  EDIT_SUCCESS = 'comment/EDIT_SUCCESS',
}

export interface IComment {
  id: number;
  postId: number;
  name?: string;
  body: string;
  email?: string;
  onEdition?: boolean;
}

export interface ICommentState {
  readonly data: IComment[];
}
