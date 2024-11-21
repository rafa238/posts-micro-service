import React from 'react'

export const CommentList = ({comments}) => {

    const renderedComments = Object.values(comments).map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}
