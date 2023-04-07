import React, { useEffect } from "react";
import { PostCardListWrapper } from "../styled-components/PostCard.styled";
import { PostCardList } from "./PostCardList";
import { useState } from "react";
import { AddPost } from "./AddPost";
import { StyledAddPostButton } from "../styled-components/Form.styled";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [viewAddPost, setViewAddPost] = useState(false);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // ADD NEW POST
  const addPost = async (post) => {
    const res = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    const data = await res.json();

    setPosts([...posts, data]);
  };

  // FETCH POSTS
  const fetchPosts = async () => {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
    console.log(process.env.BASE_URL);
  });

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
