import React, {useState, useEffect} from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from './Story';
import { ITEM_PER_PAGE } from '../constants/index'
import { Pagination, List } from 'antd'


export const StoryBrowse = () => {

    const [storyIds, setStoryIds] = useState([]);
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(ITEM_PER_PAGE);


    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    const handleChange = (value) => {
        if (value < 1) return;

        setMinVal((value - 1) * ITEM_PER_PAGE);
        setMaxVal(value * ITEM_PER_PAGE);
    }

    return (
        <>
            <List
                
                header={<h2>Top Stories</h2>}
                itemLayout="horizontal"
            >           
                <div style={{ marginTop: '2rem'}}>{storyIds.slice(minVal, maxVal).map((storyId) => <Story key={storyId}  storyId={storyId} />)} </div>
            </List>
            <Pagination
                defaultCurrent={1}
                defaultPageSize={ITEM_PER_PAGE}
                onChange={handleChange}
                total={storyIds.length}
                style={{ marginTop: '2rem'}}
            />

        </>
    );
}
