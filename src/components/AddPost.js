import {
  StyledInput,
  StyledAddButton,
  StyledForm,
} from "../styled-components/Form.styled";
import { useState } from "react";

export const AddPost = ({ onAdd }) => {
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!postName) {
      alert("Please add a name");
    }

    onAdd({ postName, postDescription });
    setPostName("");
    setPostDescription("");
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <h1>Add New Post</h1>
        <label htmlFor="name">Post Name</label>
        <StyledInput
          value={postName}
          onChange={(e) => setPostName(e.target.value)}
          type="text"
          name="name"
          placeholder="Name"
        />
        <label htmlFor="description">Description</label>
        <StyledInput
          value={postDescription}
          onChange={(e) => setPostDescription(e.target.value)}
          type="text"
          name="description"
          placeholder="Describe your post"
        />
        <StyledAddButton>Add</StyledAddButton>
      </StyledForm>
    </>
  );
};
