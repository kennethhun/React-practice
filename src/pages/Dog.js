import { useState } from 'react';
import { useEffect } from 'react';

const DogFetch = () => {
    const [images, setImage] = useState([])
    useEffect(() => {fetch(`https://dog.ceo/api/breeds/image/random`)
      .then(response => response.json())
      .then(data => setImage(data))
    }, []);
    return (
     <div>
        <img src={images.message} alt={`Doggo`} />
     </div>
    );
  };

  export default DogFetch;