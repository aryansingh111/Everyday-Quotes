import React, { useState, useEffect } from "react";
import "./Quote.css";
import twitter_icon from "../Assets/twitter-x.png";
import reload_icon from "../Assets/reload.png";

export const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quotee, setQuotee] = useState({
    quote: "None can destroy iron, but its own rust can! Likewise, none can destroy a person, but their own mindset can.",
    author: "Ratan Tata",
  });

  useEffect(() => {
    const loadQuotes = async () => {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setQuotes(data.quotes);
    };
    loadQuotes();
  }, []);

  const random = () => {
    if (quotes.length > 0) {
      const select = quotes[Math.floor(Math.random() * quotes.length)];
      setQuotee(select);
    }
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quotee.quote} - ${quotee.author}`
    );
  };

  return (
    <div className="Head">
        <h1>Random Quotes Generator</h1>
        <div className="Container">
      <div className="quote">{quotee.quote}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">~{quotee.author}</div>
          <div className="icons">
            <img src={reload_icon} alt="Reload icon" onClick={random} />
            <img src={twitter_icon} alt="Twitter icon" onClick={twitter} />
          </div>
        </div>
      </div>
    </div>
    <div className="Foot">
        <p>&lt;/made with ❤️ by Aryan Singh&gt;</p>
    </div>
    </div>
  );
};
