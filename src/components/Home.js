import React from "react";
import {
  PostCardListWrapper,
  PostCardStyled,
} from "../styled-components/PostCard.styled";
import { PostCard } from "./PostCard";
import { PostCardList } from "./PostCardList";
import { useState } from "react";

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

  return (
    <>
      <PostCardListWrapper>
        <PostCardList posts={posts} />
      </PostCardListWrapper>
    </>
  );
};
