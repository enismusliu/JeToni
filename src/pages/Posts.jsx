import React, { useEffect, useState } from "react";
import WorkCard from "../components/molecules/WorkCard/WorkCard";
import { getPosts } from "../api/queries";

function Posts() {
  const [posts, setPosts] = useState([]);
  const getAllPosts = async () => {
    const allPosts = await getPosts();
    setPosts(allPosts);
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="works container">
      <div className="WorksNav">
        <p>Works</p>
      </div>
      <div className="worksItems">
        {posts.map((post) => {
          return (
            <WorkCard
              id={post.id}
              key={post.id}
              title={post.title}
              description={post.body}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
