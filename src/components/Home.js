import React, { useEffect } from "react";
import { PostCardListWrapper } from "../styled-components/PostCard.styled";
import { PostCardList } from "./PostCardList";
import { useState } from "react";
import { AddPost } from "./AddPost";
import { StyledAddPostButton } from "../styled-components/Form.styled";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  const [viewAddPost, setViewAddPost] = useState(false);

  const addPost = async (post) => {
    const res = await fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    const data = res.json();

    setPosts([...posts, data]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:8000/posts");
    const data = await response.json();
    setPosts(data);
  };

  return (
    <>
      <PostCardListWrapper>
        <StyledAddPostButton
          style={{ backgroundColor: viewAddPost ? "brown" : "" }}
          onClick={() => setViewAddPost(!viewAddPost)}>
          {viewAddPost ? "Close" : "Add Post"}
        </StyledAddPostButton>
        {viewAddPost && <AddPost onAdd={addPost} />}
        <PostCardList posts={posts} />
      </PostCardListWrapper>
    </>
  );
};
