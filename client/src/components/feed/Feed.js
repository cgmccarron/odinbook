import React from "react";
import StoryReel from "./story/StoryReel";
import PostMaker from "./postMaker/PostMaker";
import Post from "./post/Post";

import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <PostMaker />
      <Post
        profilePic="https://media.licdn.com/dms/image/C4D03AQH1yMD3NzYDDQ/profile-displayphoto-shrink_800_800/0/1517493780761?e=1694649600&v=beta&t=faLehq2SPhoNtDZi4suG6SvXNGEISrbdjIRw5mSyVXQ"
        message="This is my message in the post"
        timestamp="1689061292"
        imgName="imgName"
        username="Christian McCarron"
      />

      {/*{postData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))} */}
    </div>
  );
};

export default Feed;
