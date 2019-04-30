import axios from "axios"
import { GET_POSTS, IS_MORE_POSTS, NO_MORE_POSTS, ISLOADED_DISABLE } from '../constants'

export const getPosts = () => async dispatch => {

    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({ type: GET_POSTS, payload: posts.data })
}

export const isMorePosts = () => {
    return {
        type: IS_MORE_POSTS
    }
}

export const noMorePosts = () => {
    return {
        type: NO_MORE_POSTS,
        payload: true
    }
}

export const disableLoader = () => {
    return {
        type: ISLOADED_DISABLE
    }
}
