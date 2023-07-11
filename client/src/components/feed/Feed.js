import React from "react";
import StoryReel from "./story/StoryReel";
import PostMaker from "./postMaker/PostMaker";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <PostMaker />

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
