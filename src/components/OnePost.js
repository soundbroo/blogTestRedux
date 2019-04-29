import React from 'react'
import { Link } from 'react-router-dom'
import './OnePost.css'

export class OnePost extends React.Component {



    render() {
        const { posts, postPerPage, val, loadMorePosts } = this.props
        return (
            <div className="Article">{posts.slice(0, postPerPage).map(post =>
                <div>
                    <div className="article-title">{post.title}</div>
                    <div className="article-date">March 2, 2016 | Travel</div>
                    <div className="article-text">{post.body}</div>
                    <button className="article__continue-button">
                        <Link to={`/posts/${post.id}`} className="article__continue-link">Continue reading</Link>
                    </button>
                    <hr className="article__delimetr" />
                </div>)}
                <button onClick={loadMorePosts(postPerPage)} className="article__more-button" disabled={val} >More posts</button>
            </div>
        )
    }
}