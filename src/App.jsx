import React, { useEffect, useState } from "react";
// import Logo from "./assets/fantastizeey-logo-trans.png";
import Imagecard from "./componets/Imagecard";
import Imagesearch from "./componets/Imagesearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchRandomImages = async () => {
      setIsLoading(true);
      try {
        // Generate a random page number between 1 and 10 (adjust range as needed)
        const randomPage = Math.floor(Math.random() * 10) + 1;
        const response = await fetch(
          `https://pixabay.com/api/?key=43874211-a42a71e63a21ce84877290ed2&q=${term}&image_type=photo&pretty=true&safesearch=true&per_page=20&order=popular&page=${randomPage}`
        );
        const data = await response.json();
        setImages(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching random images:", error);
        setIsLoading(false);
      }
    };

    fetchRandomImages();
  }, [term]);

  return (
    <div className="container  mx-auto">
      {/* Correct usage of Imagesearch component */}
      <Imagesearch searchText={setTerm} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">
          Loading ... <br />
          <span class="loader mt-16"></span>
        </h1>
      ) : (
        <div className="card-grid p-4 grid grid-cols-3 gap-4 ">
          {images.map((image) => (
            <Imagecard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
