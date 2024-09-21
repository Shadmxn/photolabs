import React from 'react';
import '../styles/TopicListItem.scss';

// TopicListItem component represents a single topic that can be clicked
const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    <div className="topic-list__item" onClick={() => onTopicClick(topic.id)}>
      {topic.title} {/* Display the topic title */}
    </div>
  );
};

export default TopicListItem; // Exporting the TopicListItem component for use in TopicList
