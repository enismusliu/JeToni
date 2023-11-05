import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/posts/add" element={<CreatePost />} />
        <Route path="/posts/edit/:postId" element={<EditPost />} />
      </Routes>
    </Router>
  );
};

export default App;
