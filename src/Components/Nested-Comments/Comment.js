import React, { useState } from "react";
import "./Comment.css"
export default function Comment({ comment, key, handleAddReply}) {
  const [reply, setReply] = useState("");
  const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);
  return (
    <li className="cmts-list"  key={key}>
      <span> {comment.title}</span>
      {!showReplyCommentBox ? (
        <button className="add-rply"onClick={() => setShowReplyCommentBox(true)}>Add Reply</button>
      ) : null}
      {showReplyCommentBox ? (
        <div>
          <textarea
            value={reply}
            rows={2}
            cols={20}
            onChange={(e) => setReply(e.target.value)}
          ></textarea>
          <br />
          <div className="rply-btns">
            <button onClick={()=>{
              handleAddReply(comment.id,reply)
              setShowReplyCommentBox(false)
              setReply("");
            }}>Save</button>
            <button
              onClick={() => {
                setShowReplyCommentBox(false);
                setReply("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
      {comment && comment.children && comment.children.length > 0 ? (
        <ul>
          {comment.children.map((childComment) => (
            <Comment handleAddReply={handleAddReply} key={childComment.id} comment={childComment} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}
