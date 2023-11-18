import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/queries";
import { addPost } from "../api/mutation";

function EditPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { postId } = useParams();

  const addNewPost = async (e) => {
    e.preventDefault();
    await addPost(postId, { title: title, body: body });
  };
  const getSpecificPost = async () => {
    const specificPost = await getPost(postId);
    setBody(specificPost.body);
    setTitle(specificPost.title);
  };

  useEffect(() => {
    getSpecificPost();
  }, []);
  return (
    <form onSubmit={(e) => addNewPost(e)}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default EditPost;
