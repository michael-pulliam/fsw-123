import { useEffect } from 'react';
import './App.css';
import {useState} from "react";

function App() {

  const [imgSrc, setImgSrc] = useState("");
  const [alt, setAlt] = useState("");

  const API = "OawxBXsKuWCZrcT6lBMdc34hgONgyjSH";

  useEffect(() =>{
  const getData = () => {

fetch(`https://api.giphy.com/v1/gifs/search?q=computer&api_key=${API}`)
  .then((response) => response.json())
  .then((data) => {
    let imgIndex = 0
    data.data.forEach(() => imgIndex++);
    const random = Math.floor((Math.random() * imgIndex) + 1)
    setImgSrc(data.data[random].images.original.url)
    setAlt(data.data[random].title)
  })
  .catch((error) => console.log(error))
}
getData()
}, [])

const getSearch = () => {
  document.querySelector("#imgTag").src=""
  document.querySelector("#imgTag").alt=""
  const userInput = document.querySelector("#input").value
  let loading = document.createElement("h3");
  loading.id = "loading"
  loading.textContent = "Loading Gif...";
  document.querySelector("#imgDiv").appendChild(loading)
  if(document.querySelector("#noImgFound")){
    document.querySelector("#noImgFound").remove()
    
  }
  fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${API}`)
    .then((response) => response.json())
    .then((data) => {
      let imgIndex = 0
      data.data.forEach(() => imgIndex++);
      if(imgIndex !==0){
      const random = Math.floor((Math.random() * imgIndex) + 1)
      setImgSrc(data.data[random].images.original.url)
      setAlt(data.data[random].title)
      }else if(imgIndex === 0){
        const noImgFound = document.createElement("h2")
        noImgFound.textContent = "No Image Found..."
        noImgFound.id = "noImgFound"
        document.querySelector("#imgDiv").appendChild(noImgFound);
      
      }
    })
    .then(() => {
      document.querySelector("#loading").remove()
    })
    .catch((error) => console.log(error))
}



  return (
    <>
    <input 
      type="text"
      id="input"
    ></input>
    <button onClick={() =>{getSearch()}}>Search</button>
    <div id="imgDiv">
    <img src={imgSrc} alt={alt} id="imgTag">
    </img>
    </div>
    </>
  );
}

export default App;


// key: OawxBXsKuWCZrcT6lBMdc34hgONgyjSH