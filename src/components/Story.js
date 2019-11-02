import React, { useState, useEffect} from 'react';
import { getItem } from '../services/hnApi';
import { Card, Button } from 'antd'

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getItem(storyId).then(data => data && data.url && setStory(data));
        
    }, [storyId]);

    return story && story.url ? (
        <>
            <Card style={{margin: '2rem 0rem'}} title={story.title}  extra={<em>{`By ${story.by}`}</em>}>
                 <Button style={{marginRight: '0.5rem' }} key="2">
                     <a href={`story/${ storyId }`}>Comments</a>
                 </Button>
                 <Button key="1"><a href={story.url}>Visit Source</a></Button>
            </Card>
        </>
    ): null;
}
