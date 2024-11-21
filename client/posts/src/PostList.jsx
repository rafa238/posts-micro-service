import React, { Children, useEffect, useState } from 'react';
import axios from 'axios';
import { CommentCreate } from './CommentCreate';
import { CommentList } from './CommentList';


export const PostList = () => {
    const [posts, setPosts] = useState({});

    
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');
        setPosts(res.data);
    }

    useEffect(() => {
        fetchPosts();
    }, [])
    const renderedPosts = Object.values(posts).map(posts => {
        return (
        <div
            className='card'
            style={{width: '30%', marginBottom: '20px'}}
            key={posts.id}
        >
            <div
            className='card-body'>
                <h3>
                    {posts.title}
                </h3>
                <CommentCreate postId={posts.id} />
                <CommentList comments={posts.comments} />
            </div>
        </div>)
    });
    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderedPosts}
        </div>
    )
}
