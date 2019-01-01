import React from 'react'

const Quote = ({ quote, author, newQuote }) => (
    <div id="wrapper" className="wrapper">
        <div id="quote-box" className="quote-box">
            <div id="text" className="quote-box__text">
                <q>{quote}</q>
            </div>
            <div id="author" className="quote-box__author">
                {author}
            </div>
            <button
                id="new-quote"
                className="quote-box__btn"
                onClick={newQuote}>
                New Quote
            </button>
            <a
                href={`http://twitter.com/intent/tweet?text=${quote} - ${author}`}
                id="tweet-quote"
                target="_blank"
                rel="noopener noreferrer"
                className="quote-box__btn">
                Tweet Quote
            </a>
        </div>
    </div>
)

export default Quote
