import React, { useState } from "react";
import Comment from "./Comment";
import "./Comment.css";

export default function NestedComments() {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      title: "Nice Flower",
      children: [
        {
          id: 2,
          title: "Thank you",
          children: [],
        },
        {
          id: 3,
          title: "Nice Photography",
          children: [],
        },
        {
          id: 4,
          title: "yeah its really nice....",
          children: [],
        },
      ],
    },
  ]);
  const [showAddCommentBox, setShowAddCommentBox] = useState(false);

  function handleAddReply(getCrntParentId, getCrntRply) {
    console.log(getCrntParentId, getCrntRply);
    const updatedComments = [...comments];
    handleAddNewComment(updatedComments, getCrntParentId, getCrntRply);
    setComments(updatedComments);
  }

  function handleAddNewComment(updatedComments, getCrntParentId, getCrntRply) {
    for (let i = 0; i < updatedComments.length; i++) {
      let comment = updatedComments[i];
      if (comment.id === getCrntParentId) {
        comment.children.unshift(newComment(getCrntRply));
      }
    }

    for (let i = 0; i < updatedComments.length; i++) {
      let comment = updatedComments[i];
      handleAddNewComment(comment.children, getCrntParentId, getCrntRply);
    }
  }

  function newComment(text) {
    return {
      id: new Date().getTime(),
      title: text,
      children: [],
    };
  }

  return (
    <div className="Nested-comments-con">
      <h1>Nested Comments</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2pnIeIwKaLQxwG9nhFGx5CEKkk6y6vhn_w&s"
        width={300}
        height={300}
      />
      <div className="add-cmt-con">
        <textarea
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          rows={3}
          cols={38}
        ></textarea>
        <br />
        <button
          onClick={() => {
            setComments([newComment(inputValue), ...comments]);
            setInputValue("");
          }}
        >
          Add Comment
        </button>
      </div>
      <ul>
        {comments.map((comment, idx) => (
          <Comment
            handleAddReply={handleAddReply}
            comment={comment}
            key={idx}
          />
        ))}
      </ul>
    </div>
  );
}
