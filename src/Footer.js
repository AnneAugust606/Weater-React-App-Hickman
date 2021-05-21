import React from "react";
import "./Footer";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <small>
        Coded by Gretchyn Hickman |{" "}
        <a
          className="github-ref"
          href="https://github.com/AnneAugust606/Weater-React-App-Hickman"
          target="_blank norefferer"
        >
          GitHub
        </a>
        |{" "}
        <a
          className="github-ref"
          href="https://priceless-villani-2db0d0.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </small>
    </div>
  );
}
