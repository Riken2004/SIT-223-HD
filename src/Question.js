import React from 'react';
import './Question.css';

const QuestionSection = () => {
    return (
        <div className="question-section">
            <h2> What do you want to ask or share </h2>
            <p>This section is designed based on the type of the post. It could be developed by conditional rendering.
                <a className='color'> For post a question, the following section would be appeared.</a>
            </p>
            <label className='Q1'>Title</label>
            <input type="text" className="RP1" placeholder="Start your question with how, what, why, etc"/>
            <label className='Q1'>Describe your Problem</label>
            <textarea className="RP2" placeholder="Describe your problem in detail"/>
            <label className='Q1'>Tags</label>
            <input className='RP3' type='text' placeholder="please add up to 3 tags to describe what your question is about e.g., java"/>
            <button className='btn'>Post</button>   
        </div>
    );
};

export default QuestionSection;
