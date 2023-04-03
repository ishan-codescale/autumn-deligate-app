import React from "react";
import { PostCard } from "./PostCard";

export const PostCardList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};
