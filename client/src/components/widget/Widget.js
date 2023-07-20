import React from "react";

import "./Widget.css";

const Widget = () => {
  return (
    <div className="widget__container">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftheodinproject%2F&tabs=timeline&width=340&height=1500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        style={{ border: "none", overflow: "hidden" }}
        height="600"
        width="340"
        frameborder="0"
        allowfullscreen="true"
        allowTransparency="true"
        allow="encrypted-media;"
        title="facebook-widget"
        className="widget"
      ></iframe>
    </div>
  );
};

export default Widget;
