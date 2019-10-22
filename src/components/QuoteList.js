import React from 'react';
import QuoteCard from './QuoteCard';
const quotes = [
    {
        quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
        character: "Nelson Muntz",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
    },  
    { 
        quote: "Shut up, brain. I got friends now. I don't need you anymore.",
        character: "Lisa Simpson",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083"
    },
    {   
        quote: "Oh, so they have Internet on computers now!",
        character: "Homer Simpson",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"   
    },
    {
        quote: "Nothing you say can upset us. We're the MTV generation.",
        character: "Bart Simpson",
        image :"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
    }
]
const QuoteList = () => (
    <div>
        {quotes.map(item => (
            <QuoteCard key={item.image} quote={item.quote} image={item.image} character={item.character} />
            
        ))}
    </div>
);

export default QuoteList;