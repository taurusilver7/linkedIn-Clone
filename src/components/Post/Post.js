import React, { forwardRef, useState } from "react";
import "./Post.css";

import { Avatar } from "@material-ui/core";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import InputOption from "../InputOption/InputOption";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Post = forwardRef(({ name, desc, message, photoUrl }, ref) => {
  const user = useSelector(selectUser);

  const [comment, setComment] = useState(false);
  const [input, setInput] = useState("");
  const [comments, setComments] = useState({
    name: user.displayName,
    message: input,
  });

  const sendComment = (e) => {
    e.preventDefault();

    setComment(false);
  };

  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
        <InputOption
          onClick={() => setComment(!comment)}
          Icon={ChatOutlinedIcon}
          title="Comment"
          color="gray"
        />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>

      {comment && (
        <div className="post__comments">
          <form>
            <input
              value={input}
              placeholder="Enter your Comment"
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendComment} type="submit">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
});

export default Post;
