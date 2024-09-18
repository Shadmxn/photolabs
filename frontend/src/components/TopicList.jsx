import React from 'react';
import TopicListItem from './TopicListItem'; // Import TopicListItem
import '../styles/TopicList.scss';

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list"> {/* Use the correct class */}
      {sampleDataForTopicList.map(topic => (
        <TopicListItem key={topic.id} topic={topic} /> // Pass the topic data
      ))}
    </div>
  );
};

export default TopicList;
