import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

// TopicList component displays a list of topics that users can click on
const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="topic-list" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      {topics.map(topic => (
        <TopicListItem key={topic.id} topic={topic} onTopicClick={onTopicClick} /> // Render a TopicListItem for each topic
      ))}
    </div>
  );
};

export default TopicList; // Exporting the TopicList component for use in other parts of the application
