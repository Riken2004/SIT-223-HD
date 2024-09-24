import React, { useState } from 'react';
import './Article.css';

const Article = ({ onSelect }) => {

    // State to monitor the chosen post type
    const [selectedType, setSelectedType] = useState('question');

    const handleTypeChange = (type) => {
        setSelectedType(type);
        onSelect(type);
    };

    return (
        <div className="article-container">
            <p className="select-text">Select post type:</p>
            <div className="radio-group">
                <label className="radio-label">
                    <input 
                        type="radio"
                        name="postType"
                        value="question"
                        checked={selectedType === 'question'}
                        onChange={() => handleTypeChange('question')}
                    />
                    Question
                </label>
                <label className="radio-label">
                    <input 
                        type="radio"
                        name="postType"
                        value="article"
                        checked={selectedType === 'article'}
                        onChange={() => handleTypeChange('article')}
                    />
                    Article
                </label>
            </div>
        </div>
    );
};

export default Article;
