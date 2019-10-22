import React from 'react';


function FetchQuote({ newQuote }) {
    return (
        <div>
            <img src={newQuote.image}
            alt={newQuote.character}
            />
            <ul>
                <li>{newQuote.character}</li>
                <li>{newQuote.quote}</li>
            </ul>
        </div>
    )

}
export default FetchQuote;