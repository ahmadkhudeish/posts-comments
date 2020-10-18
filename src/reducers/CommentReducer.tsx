import { GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILED, CLEAR_COMMENTS } from "../actions/Types"
import applyChanges from "../utils/ReduxHelpers";
import { GetCommentsAction } from "../models/ActionModels/CommentsActionModel";
import { CommentState } from "../models/CommentModel";

const initialState: CommentState = {
     comments: [], 
     error: ''
}

export function CommentReducer(state = initialState, action: GetCommentsAction): CommentState {
     switch (action.type) {
          case GET_COMMENTS_SUCCESS:
               return applyChanges(state, {
                    comments: Object.assign(state.comments, action.payload),
               })
          case GET_COMMENTS_FAILED:
               return {
                    error: action.error
               }
          case CLEAR_COMMENTS:
               return {
                    comments: []
               }
          default:
          return state
     }
}
   