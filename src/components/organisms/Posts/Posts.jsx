import React from "react";
import PostCard from "../../molecules/PostCard/PostCard";
import "./Posts.css";

function Posts() {
  const posts = [
    {
      id: 1,
      title: "title1",
      date: "21/02/2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptatem!",
    },
    {
      id: 2,
      title: "title2",
      date: "21/02/2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptatem!",
    },
  ];
  return (
    <div className="posts">
      <div className="postsContainer container">
        <div className="postsNav">
          <p>Recent posts</p>
          <button>View All</button>
        </div>
        <div className="postsItems">
          {posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                title={post.title}
                date={post.date}
                description={post.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
