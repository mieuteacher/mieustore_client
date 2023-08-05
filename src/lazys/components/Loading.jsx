import React from "react";
import "./Loading.scss";
import Img from './icon.png'
export default function Loading() {
  return (
    <div className="loading_container">
      <img
        className="rotating-image"
        src={Img}
      />
    </div>
  );
}
