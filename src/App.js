import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactPlayer from "react-player";
import Header from './components/header/Header';
import Poem  from './components/poem/poem';

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyjNzH1s9dHUYRjG'}).base('appgOzgAwWbtmEmBr');

function App() {

  const [content, setContent] = useState("empty");
  const [video, setVideo] = useState("empty");
  const [title, setTitle] = useState("empty");
  const [author, setAuthor] = useState("empty");

base('Table 1').find('recW3qcuwxQ3myamk', function(err, record) {
    if (err) { console.error(err); return; }
    setContent(record.get('poem_content'));
    setVideo(record.get('poem_link'));
    setTitle(record.get('poem_title'));
    setAuthor(record.get('poem_name'));

    console.log(content);
});

var words = content.replace( /\n/g, " \n" ).split(" ")
console.log(words);



  return (
    <div className="App">
      <Header/>
      <Poem content={words} title={title} author={author}/>
      <ReactPlayer
       url={video}
      />
    </div>
  );
}

export default App;
