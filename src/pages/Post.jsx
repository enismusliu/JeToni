import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../api/queries";

function Post() {
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const { postId } = useParams();
  const getSpecificPost = async () => {
    const specificPost = await getPost(postId);
    setPost(specificPost);
  };
  useEffect(() => {
    getSpecificPost();
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
