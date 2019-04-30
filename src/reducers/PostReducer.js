const initialState = {
    post: null,
    user: null,
    comments: null
}

export const post = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POST_DATA': {
            return { ...state, post: action.payload.post, user: action.payload.user, comments: action.payload.comments }
        }
        default: return state
    }
}