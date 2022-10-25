import Data from "./memeData";
import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3vzej.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(Data);
  // const memeText = Data.memes.name;
  // console.log(memeText);
  function handleImage() {
    const memesArray = allMemeImages.data.memes;

    var randomNumber = Math.floor(Math.random() * 100);
    var url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <div className="btn">
      <div className="form">
        <input
          type="text"
          className="left"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="rigth"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <div className="btn-and-image">
        <div className="button--parent">
          <button onClick={handleImage} className="button">
            Get a new meme image{" "}
          </button>
        </div>

        <div className="image--parent">
          <img className="image" src={meme.randomImage} alt="MemeImage" />
          <div className="imageText">
            <h2 className="topText">{meme.topText}</h2>
            <h2 className="bottomText">{meme.bottomText}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
