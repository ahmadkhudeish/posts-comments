import { GET_POSTS_FAILED, GET_POSTS_SUCCESS } from "../actions/Types"
import { PostState } from "../models/PostModel";
import { GetPostsAction } from '../models/ActionModels/PostActionModel';
import applyChanges from "../utils/ReduxHelpers";

const initialState: PostState = {
     posts: [], 
     error: ''
}

export function PostReducer(state = initialState, action: GetPostsAction): PostState {
     console.log(action)
     switch (action.type) {
          case GET_POSTS_SUCCESS:
               return applyChanges(state, {
                    posts: Object.assign(state.posts, action.payload),
               })
          case GET_POSTS_FAILED:
               return {
                    error: action.error
               }
          default:
          return state
     }
}
   