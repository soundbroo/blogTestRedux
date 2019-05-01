import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPosts } from '../actions/PostAction'
import PostComponent from '../components/PostComponent'
import { Loader } from '../components/Loader'

class PostContainer extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const { isLoaded, post, user, comments } = this.props

        return (
            <>
                {isLoaded == true ? <PostComponent post={post} user={user} comments={comments} /> : <Loader />}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoaded: state.post.isLoaded,
        post: state.post.post,
        user: state.post.user,
        comments: state.post.comments
    }
}

const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);