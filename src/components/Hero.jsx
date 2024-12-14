import { logo } from "../assets";
import {
  PROJECT_NAME,
  PROJECT_GITHUB_LINK,
  HERO_TITLE_LEFT,
  HERO_TITLE_RIGHT,
  HERO_SUBTITLE_LEFT,
  HERO_SUBTITLE_RIGHT,
} from "../constants";
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const textToType = `${HERO_SUBTITLE_LEFT} ${PROJECT_NAME}, ${HERO_SUBTITLE_RIGHT}`; // Concatenating the subtitle text
  const typingSpeed = 100; // Speed in milliseconds
  const [typedText, setTypedText] = useState(''); // Holds the text being typed
  const [index, setIndex] = useState(0); // Index for typing effect

  // Typing effect logic
  useEffect(() => {
    if (index < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + textToType.charAt(index));
        setIndex(index + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [index, textToType]);

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex items-center w-full mb-10 pt-3">
        {/* Brand logo (currently commented out) */}
        {/* <img
          src={logo}
          alt={PROJECT_NAME}
          title={PROJECT_NAME}
          className="w-28 object-contain"
          draggable="false"
          loading="lazy"
        /> */}

        {/* LinkedIn button */}
        <button
          type="button"
          onClick={() => window.open("https://www.linkedin.com/in/bhagyapatel/", "_blank")}
          className="black_btn flex items-center gap-1"
          title="Connect on LinkedIn"
        >
          {/* LinkedIn icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21.9 0H2.1C.9 0 0 .9 0 2.1v19.8C0 23.1.9 24 2.1 24h19.8c1.2 0 2.1-.9 2.1-2.1V2.1C24 .9 23.1 0 21.9 0zM7.1 20.5H3.6V9h3.5v11.5zm-1.7-13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm18.7 13h-3.5v-5.7c0-1.4-.5-2.4-1.7-2.4-1.2 0-1.8.8-2.1 1.5-.1.3-.1.6-.1.9v5.7h-3.5s.1-9.3 0-10.3h3.5v1.5c-.1.2-.4.5-.8.5-1 0-1.6-.6-1.6-1.6V9h3.5v3.4c.5-.7 1.4-1.7 3.1-1.7 2.2 0 3.9 1.4 3.9 4.3V20.5z"
            />
          </svg>
          {/* text */}
          Bhagya Patel
        </button>
      </nav>

      {/* Title */}
      <h1 className="head_text">
        {HERO_TITLE_LEFT} <br className="max-md:hidden" />
        <span className="orange_gradient">{HERO_TITLE_RIGHT}</span>
      </h1>

      {/* Subtitle with typing effect */}
      <h2 className="desc">
        <span id="typing-text">{typedText}</span>
      </h2>
    </header>
  );
};

export default Hero;
