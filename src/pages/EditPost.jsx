import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { postId } = useParams();
  async function addPost(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
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
      setTitle(result.title);
      setBody(result.body);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);
  return (
    <form onSubmit={(e) => addPost(e)}>
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
