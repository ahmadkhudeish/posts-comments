/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as Types from '../actions/Types';
import { FetchPosts } from './PostsSaga';
import { FetchComments } from './CommentsSaga';

export default function* watch() {
    yield all([
        // Post
        takeEvery(Types.GET_POSTS, FetchPosts),
        takeEvery(Types.GET_COMMENTS, FetchComments),
    ])
}
