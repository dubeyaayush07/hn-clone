import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { StoryComment } from './StoryComment'
import { getItem } from '../services/hnApi';
import {  ITEM_PER_PAGE } from '../constants/index'
import { Pagination, PageHeader, Button, List} from 'antd'


export const StoryDetail = () => {
    
    const [story, setStory] = useState({});
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(ITEM_PER_PAGE);
    const { id } = useParams();

    useEffect(() => {
        getItem(id).then(data => data && data.url && setStory(data));
    }, [id]);

    const handleChange = (value) => {
        if (value < 1) return;

        setMinVal((value - 1) * ITEM_PER_PAGE);
        setMaxVal(value * ITEM_PER_PAGE);
    }

    return story && story.url ? (
        <>
            <div>
            <PageHeader
                onBack={() => window.history.back()}
                title={story.title}
                extra={[
                    <Button key="1"><a href={story.url}>Visit Source</a></Button>,
                  ]}
                >
            </PageHeader>
            </div>
            <List
                className="comment-list"
                header={`${story.kids ? story.kids.length: 0} replies`}
                itemLayout="horizontal"
            >           
                <div>{story.kids ? story.kids.slice(minVal, maxVal).map((commentId) => <StoryComment key={commentId}  commentId={commentId} />): null }</div>
            </List>
            
            <Pagination
                defaultCurrent={1}
                defaultPageSize={ITEM_PER_PAGE}
                onChange={handleChange}
                total={story.kids ? story.kids.length: 0}
                style={{ marginTop: '2rem'}}
            />
        </>
    ): null;
}