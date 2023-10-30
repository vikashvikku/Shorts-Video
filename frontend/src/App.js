import { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video";
import VideoList from "./components/VideoList";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";

function App() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    setVideo(VideoList);
  }, []);

  return (
    <div className="App">
      <div className="app-video">
        {video.map((item) => (
          <Video id={item.id} src={item.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
