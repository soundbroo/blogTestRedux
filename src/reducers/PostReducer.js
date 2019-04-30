import { GET_POST_DATA , LOADING_POST_DATA, ISLOADED_DISABLE } from '../constants'

const initialState = {
    post: null,
    user: null,
    comments: null,
    isLoaded: false
}

export const post = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_POST_DATA: {
            return { ...state, isLoaded: false}
        }
        case GET_POST_DATA: {
            return { ...state, post: action.payload.post, user: action.payload.user, comments: action.payload.comments, isLoaded: true }
        }
        case ISLOADED_DISABLE: {
            return { ...state, isLoaded: false}
        }
        default: return state
    }
}

