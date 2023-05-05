const Card = ({ images }) => {
  return (
    // no functionality, no state here
    <>
      {images.map((img, i) => (
          <div  
            className="card" 
            key={i} 
            style={{ background: `url("${img.url}") no-repeat center/cover` }}
            ></div>
      ))}
    </>
  );
};

export default Card;

// reusable component to display one image
// images added into array. iterate thru array to display one image from array
// pass images array as prop (component expects to use this prop)
