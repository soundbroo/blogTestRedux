import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPosts } from '../actions/PostAction'
import PostComponent from '../components/PostComponent'

class PostContainer extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const { post, user, comments } = this.props
        return (
            <>
                <PostComponent post={post} user={user} comments={comments} />
                {console.log(this.props)}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post.post,
        user: state.post.user,
        comments: state.post.comments
    }
}

const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);