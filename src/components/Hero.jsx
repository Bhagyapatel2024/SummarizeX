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
