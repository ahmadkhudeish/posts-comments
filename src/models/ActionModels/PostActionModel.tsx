import * as Types from '../../actions/Types';
import { PostModel } from '../PostModel';

interface GetPosts {
     type: typeof Types.GET_POSTS,
};

interface GetPostsSuccess {
     type: typeof Types.GET_POSTS_SUCCESS,
     payload?: PostModel
};

interface GetPostsFailed {
     type: typeof Types.GET_POSTS_FAILED,
     error?: string
};

export type GetPostsAction = GetPosts | GetPostsSuccess | GetPostsFailed;