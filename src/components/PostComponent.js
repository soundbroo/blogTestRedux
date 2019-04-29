import React, { Component } from 'react';
import './Post.css';

export default class PostComponent extends Component {
    render() {
        const { post, user, comments } = this.props
        return (
            <div className="Article post-layout">
                <div className="article-title">{post.title}</div>
                <div className="article-date">March 2, 2016</div>
                <div className="article-text">{post.body}</div>
                <div className="article-author">Author:
                    <li>Username: {user.username}</li>
                    <li>Name: {user.name}</li>
                    <li>Website: {user.website}</li>
                </div>
                <hr className="comments-delimetr" />
                <div className="article-comments">
                    {comments.map(res =>
                        <div className="comments-text">
                            <p>{res.name}:</p>
                            <p className="comments-email">{res.email}</p>
                            <p>{res.body};</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}