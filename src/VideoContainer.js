import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "./Utils/Constansts";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
        {videos.map(item => (
            <Link key={item.id} to={"/watch?v="+item.id} >
            <VideoCard info={item} />
            </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
