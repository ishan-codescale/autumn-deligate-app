import React from "react";
import { PostCardListWrapper } from "../styled-components/PostCard.styled";
import { PostCardList } from "./PostCardList";
import { useState } from "react";
import { AddPost } from "./AddPost";
import { StyledAddPostButton } from "../styled-components/Form.styled";

export const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "sample post - 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit sint dolorem beatae, tempora rem dignissimos natus adipisci ad voluptatibus!",
      date: "2022-12-15",
    },
    {
      id: 2,
      name: "sample post - 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit sint dolorem beatae, tempora rem dignissimos natus adipisci ad voluptatibus!",
      date: "2022-12-15",
    },
    {
      id: 3,
      name: "sample post - 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit sint dolorem beatae, tempora rem dignissimos natus adipisci ad voluptatibus!",
      date: "2022-12-15",
    },
  ]);

  const [viewAddPost, setViewAddPost] = useState(false);

  const addPost = (post) => {
    setPosts([
      ...posts,
      {
        id: Math.floor(Math.random() * 10),
        name: post.name,
        description: post.description,
        date: post.date,
      },
    ]);
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
