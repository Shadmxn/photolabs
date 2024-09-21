import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    <div className="topic-list__item" onClick={() => onTopicClick(topic.id)}>
      {topic.title} {/* Display the topic title */}
    </div>
  );
};

export default TopicListItem;
