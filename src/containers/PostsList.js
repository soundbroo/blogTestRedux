import React, { Component } from 'react'
import { OnePost } from '../components/OnePost'
import { connect } from 'react-redux'
import { getPosts, isMorePosts, noMorePosts } from '../actions/PostListActions'

class PostsList extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    loadMorePosts(x) {

        if (x < 99) {
            console.log(x)
            this.props.isMorePosts()
            console.log(x)
        }
        else if (x > 95) {
            this.props.noMorePosts()
        }
    }

    render() {
        const { posts, postPerPage, val } = this.props.postList
        return (
            <OnePost loadMorePosts={this.loadMorePosts}
                posts={posts}
                postPerPage={postPerPage}
                val={val} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postList: state.postList
    }
}

const mapDispathToProps = {
    getPosts,
    isMorePosts,
    noMorePosts
}

export default connect(mapStateToProps, mapDispathToProps)(PostsList);