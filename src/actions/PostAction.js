import axios from "axios"

import { GET_POST_DATA, LOADING_POST_DATA } from '../constants'

export const getPosts = () => async dispatch => {
    const id = window.location.href.split("/").splice(4, 1)
    const postRequest = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
    const userRequest = await axios.get("https://jsonplaceholder.typicode.com/users/" + postRequest.data.userId)
    const commentsRequest = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
    const com = commentsRequest.data.map(res => res)
    const comments = com.filter(el => el.postId == id)
    if (!postRequest.data || !userRequest.data ){
        dispatch({
            type: LOADING_POST_DATA
        })
    } else {
        dispatch({
            type: GET_POST_DATA,
            payload: {
                post: postRequest.data,
                user: userRequest.data,
                comments: comments
            }
        })
    }
}