import React from "react";
import "../styles/LeftMenu.css";
import Track from "../img/track.png";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";

function TrackList({ trackName, artistName }) {
  return (
    <div className="trackList">
      <div className="top">
        <img alt="Track" src={Track} />
        <p className="trackName">
          {trackName} <span className="trackSpan">{artistName}</span>
        </p>
      </div>

      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>

        <input type="range" />

        <i>
          <BsMusicNoteList />
        </i>

        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export default TrackList;
