import React from "react";
import { PostCardStyled } from "../styled-components/PostCard.styled";

export const PostCard = ({ post }) => {
  return (
    <PostCardStyled post={post} key={post.id}>
      <h1>{post.name}</h1>
      <p>{post.description}</p>
      <p>{post.date}</p>
    </PostCardStyled>
  );
};
