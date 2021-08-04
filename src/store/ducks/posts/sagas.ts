import { call, put } from '@redux-saga/core/effects';
import api from '../../../services/api';
import { IPost } from './types';
import { loadSuccess } from './actions';

export function* loadPosts() {
  const response: IPost[] = yield call(api.get, 'posts');
  yield put(loadSuccess(response));
}
