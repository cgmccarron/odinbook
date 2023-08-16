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
      <Post
        profilePic="https://media.licdn.com/dms/image/C4D03AQH1yMD3NzYDDQ/profile-displayphoto-shrink_800_800/0/1517493780761?e=1694649600&v=beta&t=faLehq2SPhoNtDZi4suG6SvXNGEISrbdjIRw5mSyVXQ"
        message="This is my message in the post"
        timestamp="1689061292"
        imgName="imgName"
        username="Mayhem"
      />
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
                profilePic="https://media.licdn.com/dms/image/C4D03AQH1yMD3NzYDDQ/profile-displayphoto-shrink_800_800/0/1517493780761?e=1694649600&v=beta&t=faLehq2SPhoNtDZi4suG6SvXNGEISrbdjIRw5mSyVXQ"
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
