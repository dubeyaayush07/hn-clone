import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const itemUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
    const result = await axios.get(topStoriesUrl).then(({ data }) => data);
    return result;
};

export const getItem = async itemId => {
    const result = await axios
        .get(`${itemUrl + itemId}.json`)
        .then(({ data }) => data);
    
    return result;
}

