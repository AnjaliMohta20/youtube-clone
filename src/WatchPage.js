import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./Utils/AppSlice";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const [params] = useSearchParams();
  const videoID = params.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+videoID}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;