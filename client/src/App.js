import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Feed />
      {/* widgets */}
    </div>
  );
}

export default App;
