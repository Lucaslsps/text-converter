import React from "react";
import { FaHeart, FaGithub, FaReact } from "react-icons/fa";
import "./style.css";

const footer = () => {
  function handleGitHub() {
    window.open("https://www.github.com/lucaslsps");
  }

  return (
    <>
      <div class="footer">
        <span>
          Made with <FaReact /> by Lucas Peixoto{" "}
          <FaGithub onClick={handleGitHub} cursor="pointer" />
        </span>
      </div>
    </>
  );
};

export default footer;
