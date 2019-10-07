import React from 'react'; 
import './QuoteCards.css'

function QuoteCard(props) {
    return (
        <figure class="QuoteCard">
            <img
                src={props.image}
                alt={props.character} />
            <ficaption>
                <blockquote>{props.quote}
                </blockquote>
                <cite>{props.character}</cite>
            </ficaption>
        </figure>
    )
}
export default QuoteCard;