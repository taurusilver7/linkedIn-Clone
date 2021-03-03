import React, { useEffect, useState } from "react";
import "./Feed.css";

import CreateIcon from "@material-ui/icons/Create";
import PhotoIcon from "@material-ui/icons/Photo";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import FlipMove from "react-flip-move";

import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";
import { db } from "../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) =>
        setPosts(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user?.displayName,
      desc: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              placeholder="Enter your feed"
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={PhotoIcon} color="#7085f9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#e7a33e" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#7fc15e"
          />
        </div>
      </div>

      {/* posts */}
      <FlipMove>
        {posts.map(
          ({ id, data: { name, message, desc, photoUrl, timestamp } }) => (
            <Post
              key={id}
              name={name}
              message={message}
              desc={desc}
              photoUrl={photoUrl}
            />
          )
        )}
      </FlipMove>
    </div>
  );
};

export default Feed;
