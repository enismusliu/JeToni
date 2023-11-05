import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Post() {
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const { postId } = useParams();
  async function getPost() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
      setPost(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <p>{post?.title}</p>
      <p>{post?.body}</p>
      <button onClick={() => navigate(`/posts/edit/${postId}`)}>
        Edit This Post
      </button>
    </div>
  );
}

export default Post;
