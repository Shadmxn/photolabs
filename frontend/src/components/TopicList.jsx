import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="topic-list" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      {topics.map(topic => (
        <TopicListItem key={topic.id} topic={topic} onTopicClick={onTopicClick} />
      ))}
    </div>
  );
};

export default TopicList;
