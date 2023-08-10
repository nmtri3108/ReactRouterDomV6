import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPosts = {
  "first-blog-post": {
    title: "First Blog Post",
    description: "Lorem ipsum dolor sit amet, consectetur adip.",
  },
  "second-blog-post": {
    title: "Second Blog Post",
    description: "Hello React Router v6",
  },
};

const Post = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BlogPosts[slug];
  if (!post) {
    return navigate("/posts");
    //return <span>The blog post you've requested doesn't exist.</span>;
  }

  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        onClick={() => {
          navigate("/posts");
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Post;
