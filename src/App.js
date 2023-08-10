import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import NotMatch from "./components/notmatch";
import Update from "./components/update";
import Posts from "./components/posts";
import PostList from "./components/postList";
import Post from "./components/post";

function App() {
  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 10 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 10 }}>
          About
        </Link>
        <Link to="/update/10" style={{ padding: 10 }}>
          Update
        </Link>
        <Link to="/posts" style={{ padding: 10 }}>
          Post
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostList />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;
