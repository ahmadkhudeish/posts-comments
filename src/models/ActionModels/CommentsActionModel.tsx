import * as Types from '../../actions/Types';
import { CommentModel } from '../CommentModel';

export interface GetComments {
     type: typeof Types.GET_COMMENTS,
     postId: number
};

interface GetCommentsSuccess {
     type: typeof Types.GET_COMMENTS_SUCCESS,
     payload?: CommentModel
};

interface GetCommentsFailed {
     type: typeof Types.GET_COMMENTS_FAILED,
     error?: string
};

export interface ClearComments {
     type: typeof Types.CLEAR_COMMENTS,
};


export type GetCommentsAction = GetComments | GetCommentsFailed | GetCommentsSuccess | ClearComments ;