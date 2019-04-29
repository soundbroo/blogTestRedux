const initialState = {
    posts: [],
    postPerPage: 5,
    val: false
}

export const postList = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POSTS': {
            return { ...state, posts: action.payload }
        }
        case ('IS_MORE_POSTS'): {
            return { state, postPerPage: action.payload }
        }
        case ('NO_MORE_POSTS'): {
            return { state, val: action.payload }
        }

        default: return state
    }
}