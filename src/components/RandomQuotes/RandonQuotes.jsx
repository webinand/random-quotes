import React, { useState } from "react";
import "./randomquotes.css";
import icon from "./icon.png";

const Randomquotes = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
    console.log(quotes);
  }

  const [quote, setQuote] = useState({
    text: "send funds",
    author: "lydia",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  loadQuotes();

  return (
    <div className="box">
      <div className="quotes">{quote.text}</div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author"> -{quote.author.split(",")[0]}</div>
        <div className="icon">
          <img
            src={icon}
            alt=""
            onClick={() => {
              random();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Randomquotes;
