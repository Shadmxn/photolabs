import React from "react";
import PropTypes from 'prop-types';
import "../styles/TopicListItem.scss";

const TopicListItem = ({ title }) => {
  return (
    <div className="topic-list__item">
      {title}
    </div>
  );
};

TopicListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopicListItem;
