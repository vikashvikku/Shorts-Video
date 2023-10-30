import React, { useRef, useState } from "react";
import "./Video.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import NearMeIcon from "@mui/icons-material/NearMe";
// import Ticker from "react-ticker";
import { Avatar } from "@mui/material";
// import YouTube from "react-youtube";

const Video = ({ id, src }) => {
  const [playing, setPlaying] = useState(false);
  const [subscribe, setSubscribe] = useState();

  const videoRef = useRef(null);
  const handleVideoClick = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setPlaying((play) => !play);
    }
  };

  const handleSubscribeClick = () => {
    setSubscribe((subs) => !subs);
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoClick}
        id={id}
        className="video-player"
        src={src}
        ref={videoRef}
        loop
      />
      <div className="video-container">
        <div className="video-header">
          <div className="video-header-icon">
            <ArrowBackIcon />
          </div>
          <div className="video-header-icon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="video-side-icons">
          <div className="video-side-icon">
            <ThumbUpIcon />
            <p>600</p>
          </div>
          <div className="video-side-icon">
            <ThumbDownIcon />
            <p>80</p>
          </div>
          <div className="video-side-icon">
            <InsertCommentIcon />
            <p>43</p>
          </div>
          <div className="video-side-icon">
            <NearMeIcon />
          </div>
        </div>
        <div className="video-bottom">
          <div className="video-description">
            {/* <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p className="desc">This is description</p>
                </>
              )}
            </Ticker> */}
          </div>

          <div className="video-detail">
            <Avatar />
            <p>Channel Name</p>
            <button
              style={{
                background: subscribe ? "red" : "hsla(0, 0%, 69.4%, .609)",
              }}
              onClick={handleSubscribeClick}
            >
              {subscribe ? "SUBSCRIBED" : "SUBSCRIBE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
