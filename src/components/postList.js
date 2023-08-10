import React from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/posts/first-blog-post">first Post</Link>
        </li>
        <li>
          <Link to="/posts/second-blog-post">second Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default PostList;
