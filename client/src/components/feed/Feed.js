import React, { useEffect, useState } from "react";
import StoryReel from "./story/StoryReel";
import PostMaker from "./postMaker/PostMaker";
import Post from "./post/Post";
import instance from "../../axios";

import "./Feed.css";

const Feed = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    console.log("rerender");
    const timer = setTimeout(() => {
      getPosts();
    }, 1000);
    return () => clearTimeout(timer);
  });

  const getPosts = async () => {
    try {
      const res = await instance.get("retrieve/posts");
      setPostData(res.data);
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <div className="feed">
      <StoryReel />
      <PostMaker />
      {postData.length > 0 ? (
        <>
          {postData.map((e) => {
            return (
              <Post
                key={e._id}
                username={e.username}
                timestamp={e.timestamp}
                imgName={e.imgName}
                message={e.text}
                profilePic={e.avatar}
              />
            );
          })}{" "}
        </>
      ) : (
        <div>Pending</div>
      )}
    </div>
  );
};

export default Feed;
