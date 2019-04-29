import React, { Component } from 'react';
import axios from 'axios';
import PostComponent from '../components/PostComponent'

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            post: [],
            user: [],
            comments: []
        }
    }

    async componentDidMount() {
        const id = window.location.href.split("/").splice(4, 1)
        const postRequest = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
        const userRequest = await axios.get("https://jsonplaceholder.typicode.com/users/" + postRequest.data.userId)
        const commentsRequest = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
        const com = commentsRequest.data.map(res => res)
        const comments = com.filter(el => el.postId == id)

        this.setState({
            id: id,
            post: postRequest.data,
            user: userRequest.data,
            comments: comments
        })
    }


    render() {
        const { post, user, comments } = this.state
        return (
            <PostComponent post={post} user={user} comments={comments} />
        )
    }
}


export default PostContainer;