import React from 'react'; 
import './QuoteCards.css'

function QuoteCard() {
    return (
        <figure class="QuoteCard">
            <img
                src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
                alt="Nelson Muntz" />
            <ficaption>
                <blockquote>
                    Shoplifting is a victimless crime, like punching someone in the dark.
                </blockquote>
                <cite>Nelson Muntz</cite>
            </ficaption>
        </figure>
    )
}
export default QuoteCard;