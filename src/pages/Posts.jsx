import React, { useEffect, useState } from "react";
import WorkCard from "../components/molecules/WorkCard/WorkCard";

function Posts() {
  const [posts, setPosts] = useState([]);
  async function getPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      setPosts(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    getPosts();
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
