import React, { useState } from 'react';
import MenuBar from './MenuBar'; 
import Article from './Article';
import './App.css'; 
import QuestionSection from './Question';
import Info from './Information';

const App = () => {
  const [selectedPostType, setSelectedPostType] = useState('question');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  return (
    <div className="app-container">

      {/* Menu bar element */}
      <MenuBar />
      <Article onSelect={handlePostTypeChange} />

      {/* Conditional rendering dependent on selected post type */}
      {selectedPostType === 'question' && <QuestionSection />}
      {selectedPostType === 'article' && <Info />}
    </div>
  );
}

export default App;
