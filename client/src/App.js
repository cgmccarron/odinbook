import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widget from "./components/widget/Widget";
import Login from "./pages/login/Login";
import VideoFeed from "./pages/videos/VideoFeed";
import Pages from "./pages/users/users-page/Pages";
import Market from "./pages/market/Market";
import Friends from "./pages/users/friends/Friends";
import { useStateValue } from "./StateProvider";

import { Route } from "wouter";
import Chat from "./pages/chat/Chat";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Route path="/">
              <Feed />
              <Widget />
            </Route>
            <Route path="/videoFeed">
              <VideoFeed />
            </Route>
            <Route path="/pages">
              <Pages />
            </Route>
            <Route path="/market">
              <Market />
            </Route>
            <Route path="/friends">
              <Friends />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
