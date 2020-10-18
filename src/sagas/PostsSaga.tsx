import { call, put } from 'redux-saga/effects'
import { GetPostsAction } from '../models/ActionModels/PostActionModel';
import PostsService from '../services/PostsService';
import { getPostsSuccess, getPostsFailed } from '../actions/PostActions';

function* FetchPosts(action: GetPostsAction) {
   try {
      const posts = yield call(PostsService.FetchPosts);
      yield put(getPostsSuccess(posts));
   } catch (e) {
      yield put(getPostsFailed(e.error));
   }
}

export { FetchPosts };
