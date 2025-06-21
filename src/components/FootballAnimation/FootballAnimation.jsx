import React from "react";
import Lottie from "lottie-react";
import animationData from "./football_playing.json"; // replace with your Lottie file

const FootballAnimation = () => {
  return (
    <div className="football-anim">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default FootballAnimation;
