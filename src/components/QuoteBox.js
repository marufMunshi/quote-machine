import React from 'react';


const QuoteBox = ({ currentQuote, handleQuoteChange, color }) => {
    let backgroundStyle = {
        backgroundColor: `${color}`
    };

    let colorStyle = {
        color : `${color}`
    };

    return (
        <div id="quote-box">

            <div id="text" style={colorStyle}>
                <blockquote>
                    {currentQuote.text}
                </blockquote>
            </div>

            <div id="author" style={colorStyle}>
                <cite>- {currentQuote.author}</cite>
            </div>

            <div id="buttons">
                <button 
                    id="new-quote" 
                    className="button"
                    onClick={handleQuoteChange}
                    style={backgroundStyle}
                >
                    New Quote
                </button>

                <a 
                    id="tweet-quote" 
                    className="button" 
                    target="_blank"
                    style={backgroundStyle} 
                    href={`https://twitter.com/intent/tweet/?text="${currentQuote.text}"%20-%20${currentQuote.author}`}
                >
                    <i className="ion-social-twitter"></i>
                </a>
            </div>

        </div>
    );
};

export default QuoteBox;