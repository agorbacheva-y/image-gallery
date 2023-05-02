import { useState } from "react";
import Card from "./Card.js";

function App() {
  const [ images, setImages ] = useState([
    { url: "https://source.unsplash.com/random/1" },
    { url: "https://source.unsplash.com/random/2" },
    { url: "https://source.unsplash.com/random/3" },
    { url: "https://source.unsplash.com/random/4" },
    { url: "https://source.unsplash.com/random/5" },
    { url: "https://source.unsplash.com/random/6" }
  ]);

  const getNewImages = () => {
    setImages([...images, {
      url: `https://source.unsplash.com/random/${Math.floor(Math.random()*100)}`,
    }]);
  };

  const removeImage = () => {
    setImages(images.slice(0, -1));
  };

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