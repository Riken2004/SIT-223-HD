import React from 'react';
import './Information.css';

const Info = () => {
    return (
        <div className="Part">
            <h2> What do you want to ask or share </h2>
            <p>
                This section is designed based on the type of the post. It could be developed by conditional rendering.
                {/* Changed <a> to a button or added href */}
                <a href="/post-article" className='color'> For post an article, the following section would appear.</a>
            </p>
            <label className='title'>Title</label>
            <input type="text" className="Box" placeholder="Enter a descriptive title"/>
            <h3 className='abstractclass'> Abstract </h3>
            <textarea placeholder='Enter a 1-paragraph abstract'/>
            <h3 className='abstractclass'>Article text</h3>
            <textarea placeholder='Enter the full text of your article'/>
            <label>Tags</label>
            <input className='Box2' type="text" placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"/>
            <button className="btn">Post</button>
        </div>
    );
};

export default Info;
