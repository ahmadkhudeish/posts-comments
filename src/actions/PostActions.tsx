/*
 * Actions related to Post
 */
import * as Types from './Types';
import { PostModel } from '../models/PostModel';
import { GetPostsAction } from '../models/ActionModels/PostActionModel';
import { GetCommentsAction } from '../models/ActionModels/CommentsActionModel';
import { CommentModel } from '../models/CommentModel';

/**
 * Request to get posts 
 * @returns type
 */
export function getPosts() : GetPostsAction {
     return {
          type: Types.GET_POSTS,
     };
}

/**
 * Handles post success 
 * @returns type, payload
 */
export function getPostsSuccess(payload: PostModel): GetPostsAction {
     return {
          type: Types.GET_POSTS_SUCCESS,
          payload
     };
}

/**
 * Handles post failure 
 * @returns type, error
 */
export function getPostsFailed(error: string): GetPostsAction {
     return {
          type: Types.GET_POSTS_FAILED,
          error
     };
}


/**
 * Request to get comments per post 
 * @returns type
 */
export function getComments(postId: number) : GetCommentsAction {
     return {
          type: Types.GET_COMMENTS,
          postId
     };
}

/**
 * Handles comment fetching success 
 * @returns type, payload
 */
export function getCommentsSuccess(payload: CommentModel): GetCommentsAction {
     return {
          type: Types.GET_COMMENTS_SUCCESS,
          payload
     };
}

/**
 * Handles comment fetching failure 
 * @returns type, error
 */
export function getCommentsFailed(error: string): GetCommentsAction {
     return {
          type: Types.GET_COMMENTS_FAILED,
          error
     };
}


/**
 * Handles clearing comments 
 * @returns type, error
 */
export function clearComments(): GetCommentsAction {
     return {
          type: Types.CLEAR_COMMENTS,
     };
}
