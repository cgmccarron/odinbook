import React, { useEffect, useState } from "react";
import StoryReel from "./story/StoryReel";
import PostMaker from "./postMaker/PostMaker";
import Post from "./post/Post";
import instance from "../../axios";

import "./Feed.css";

const Feed = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getPosts();
  }, [postData]);

  const getPosts = () => {
    return instance
      .get("retrieve/posts")
      .then((res) => {
        setPostData(res.data);
      })
      .catch((err) => console.log(err));
  };

  let word = postData.length > 0 ? postData[0]._id : "word";

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
