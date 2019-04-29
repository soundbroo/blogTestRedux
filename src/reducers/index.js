import { combineReducers } from 'redux'
import { postList } from './PostListReducer'
import { post } from './PostReducer'

export const rootReducer = combineReducers({
    postList,
    post
})