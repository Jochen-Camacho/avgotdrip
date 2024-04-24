import "./App.css";
import { Accomplishment } from "./components/Accomplishment/Accomplishment";
import Carousel from "./components/Carousel/Carousel";
import Nav from "./components/Nav/Nav";
import Recents from "./components/Recents/Recents";
import { Title } from "./components/Title/Title";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="App">
      <VideoPlayer />
      <div className="link-container ">
        <div className="main-cont">
          <Title />
          <Nav />
        </div>
      </div>
      <div className="recent-cont">
        <Recents />
      </div>
      <div className="accomplishment-cont">
        <Accomplishment />
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
