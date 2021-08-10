import React from 'react';
import './poem.css';

const Poem = (props) => {

    function change(event){
        console.log(event.target.innerHTML);
        var temp = event.target.innerHTML;
        
        fetch("https://api.dictionaryapi.dev/api/v2/entries/hi/" + temp)
            .then(result => result.json())
            .then(response =>{ console.log(response[0].meanings[0].definitions);})
            .catch(err=> {console.log(err);});
    }
    
return (
    <div className="Poem">
    <h1>{props.title}</h1>
    <h2>{props.author}</h2>

    {props.content.map((word) => (
            <span className="highlight" style={{whiteSpace: "pre-line"}} onClick={change}>{word + " "}</span>
    ))}

    </div>
);
}
  export default Poem;
