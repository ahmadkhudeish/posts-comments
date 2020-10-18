import { combineReducers } from 'redux'
import { CommentReducer } from './CommentReducer';
import { PostReducer } from './PostReducer'

const RootReducer = combineReducers({
  posts: PostReducer,
  comments: CommentReducer,
})

export type RootState = ReturnType<typeof RootReducer>

export default RootReducer;