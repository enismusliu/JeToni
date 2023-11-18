import React, { useState } from "react";
import { createPost } from "../api/mutation";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const createNewPost = async (e) => {
    e.preventDefault();
    await createPost({
      title: title,
      body: body,
      userId: 1,
    });
  };
  return (
    <form onSubmit={(e) => createNewPost(e)}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default CreatePost;
