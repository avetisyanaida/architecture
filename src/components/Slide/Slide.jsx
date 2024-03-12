import React from "react";
import '../../styles/slide.css'

const Slide = ({ image, isActive }) => (
    <div className={`slide ${isActive ? 'active' : ''}`}>
      <img src={image}  alt="Slide" />
    </div>
);
export default Slide



