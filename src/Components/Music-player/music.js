import React, { useEffect, useRef, useState, } from "react";
import "./music.css"

export default function Music() {
  const [crntidx, setCrntIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  const audioRef = useRef(null);


  useEffect(()=>{
    if(isPlaying){
        const interval = setInterval(()=>{
            setTrackProgress((audioRef.current.currentTime/audioRef.current.duration)*100);
        },1000);

        return()=> clearInterval(interval)
    }
  },[isPlaying]);

  const tracks = [
    {
      title: "Track 1",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX26kbcho2PKYi0hxQXnk8SpbdJSGNXc0xTg&s",
    },
    {
      title: "Track 2",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image:
        "https://www.premadepixels.com/wp-content/uploads/2021/12/Paradise-Album-Cover-PP1.jpg",
    },
    // Add more tracks as needed
  ];

  function handlePlayandPause()
  {
    if(isPlaying)
    {
       audioRef.current.pause();
    }
    else{
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  function handleSkipTrack(getDirection)
  {
     if(getDirection==="forward")
     {
       setIsPlaying(false);
       setCrntIdx((crntidx+1)%tracks.length);
     }
     if(getDirection==="backward")
     {
      setIsPlaying(false);
      setCrntIdx((crntidx-1+tracks.length)%tracks.length);
     }

  }

  return (
    <div className="mus-player-con">
      <h1>Music Player</h1>
      <div>
        <img
          src={tracks[crntidx].image}
          alt={tracks[crntidx].title}
          className="song-img"
        />
      </div>

      <audio ref={audioRef} src={tracks[crntidx].source} controls/>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${trackProgress}%`,
            background: isPlaying ? " rgb(39, 40, 40)" : "grey",
          }}
        >
        </div>
      </div>
      <div className="track-btns">
        <button onClick={()=>handleSkipTrack("backward")}>Backward</button>
        <button onClick={handlePlayandPause}>{isPlaying ? "pause" :"play"}</button>
        <button onClick={()=>handleSkipTrack("forward")}>Forward</button>
      </div>
    </div>
  );
}
