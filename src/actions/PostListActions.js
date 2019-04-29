import axios from "axios"

export const getPosts = () => async dispatch => {

    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({ type: 'GET_POSTS', payload: posts.data })


}

export const isMorePosts = () => {
    return {
        type: "IS_MORE_POSTS",
        payload: 10
    }
}

export const noMorePosts = () => {
    return {
        type: "NO_MORE_POSTS",
        payload: true
    }
}
