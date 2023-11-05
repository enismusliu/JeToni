import React from "react";
import "./PostCard.css";

function PostCard({ title, date, description }) {
  return (
    <div className="postCard">
      <h2 className="postCardTitle">{title}</h2>
      <p className="postCardDate">{date}</p>
      <p className="postCardDescription">{description}</p>
    </div>
  );
}

export default PostCard;
