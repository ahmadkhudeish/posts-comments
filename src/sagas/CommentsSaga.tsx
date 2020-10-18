import { call, put } from 'redux-saga/effects'
import { GetComments } from '../models/ActionModels/CommentsActionModel';
import CommentsService from '../services/CommentsService';
import { getCommentsSuccess, getCommentsFailed } from '../actions/PostActions';

function* FetchComments(action: GetComments) {
   try {
      const comments = yield call(CommentsService.FetchComments, action.postId);
      yield put(getCommentsSuccess(comments));
   } catch (e) {
      yield put(getCommentsFailed(e.error));
   }
}

export { FetchComments };
