import axios from "../initializations/axios";

export const getPosts = async () => {
  try {
    const response = await axios.get("posts");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getPost = async (postId) => {
  try {
    const response = await axios.get(`posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
