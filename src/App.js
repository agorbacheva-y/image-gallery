import React, { useState } from "react";
import Card from "./Card.js";

function App() {
  const [ images, setImages ] = useState([
    { url: "http://source.unsplash.com/featured/1" },
    { url: "http://source.unsplash.com/featured/2" },
    { url: "http://source.unsplash.com/featured/3" },
    { url: "http://source.unsplash.com/featured/4" },
    { url: "http://source.unsplash.com/featured/5" },
    { url: "http://source.unsplash.com/featured/6" }
  ]);
  //images is our getter, store initial value which is 6 images
  // setImages is our setter, can manipulate our state
  // use setter to add or remove an image

  const getNewImages = () => {
    // set state to previous using spread operator
    // add new image ending with random number
    setImages([...images, 
      {
        url: `http://source.unsplash.com/featured/${Math.floor(Math.random() * 100)}`,
      },
    ]);
  };

  const removeImage = () => {
    setImages(images.slice(0, -1));
  };
  // we are saying that our state (images) will images -1

  return (
    <section className="hero">
      <div className="cardContainer">
        <Card images={images} />
      </div>

      <div className="btnContainer">
        <button onClick={getNewImages}>Add</button>
        <button onClick={removeImage}>Remove</button>
      </div>
    </section>
  );
}

export default App;

// fetch images from API
// define what states we need. ask what do you want to manipulate?
// --> need state for images

/*
1. create image state
2. create jsx that returns
3. reusable component that is responsible for showing one image
4. make sure we grab images from unsplash
5, hard code first 5-6 images with url from unsplash
6. in add image method, we should add correct url to get random image
7, create function to remove image
*/