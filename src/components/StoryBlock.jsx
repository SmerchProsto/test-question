import React from 'react';

const StoryBlock = () => {
    const days = Math.floor(Math.random() * 365)
    return (
        <div className="content-property-story">
            <h1>Дней без душноты {days}</h1>
            <a className="property-story-link" href="">История</a>
        </div>
    );
};

export default StoryBlock;