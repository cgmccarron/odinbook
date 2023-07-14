import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widget from "./components/widget/Widget";
import Login from "./pages/Login";
import VideoPage from "./pages/VideoPage";
import Pages from "./pages/Pages";
import Market from "./pages/Market";
import Friends from "./pages/Friends";

import { Link, Route } from "wouter";

function App() {
  //const [{ user }, dispatch] = useStateValue();
  const user = true;
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
            <Route path="/videosPage">
              <VideoPage />
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
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
