import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({ topics }) => {
  return (
    <div className="topic-list" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}> {/* Inline styles to ensure flex behavior */}
      {topics.map(topic => (
        <TopicListItem key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default TopicList;
