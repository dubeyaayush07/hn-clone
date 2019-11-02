import React, { useState, useEffect} from 'react';
import { getItem } from '../services/hnApi';
import { Comment } from 'antd'

export const StoryComment = ({ commentId }) => {
    const [comment, setComment] = useState({});

    useEffect(() => {
        getItem(commentId).then(data => data && setComment(data));
        
    }, [commentId]);

    return comment ? (
        <>
            <Comment
                author={comment.by}
                content={<p dangerouslySetInnerHTML={{ __html: comment.text }}></p>}
            />
        </>
    ): null;
}
