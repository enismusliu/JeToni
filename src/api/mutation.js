import axios from "../initializations/axios";

export const createPost = async (addPostBody) => {
  try {
    const response = await axios.post("posts", addPostBody);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const addPost = async (postId, addPostBody) => {
  try {
    const response = await axios.put(`posts/${postId}`, addPostBody);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
