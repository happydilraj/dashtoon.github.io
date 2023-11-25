import React, { useState, useRef} from "react";
import { ColorRing } from  'react-loader-spinner'

const Comic = () => {

  const [panels, setPanels] = useState(Array(10).fill(''));
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false)
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Api Integeration
  const query = async (data) => {
    const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: { 
            "Accept": "image/png",
            "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
            "Content-Type": "application/json" 
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob();
      return result;
  };
  
  // form submit
  const handleSubmit = async (event) => {
    handleClick()
    setLoader(true)
    event.preventDefault();
    console.log("hi")

    const generatedImages = [];
    const nonEmptyPanels = panels.filter(panel => panel !== ''); // Filtering non-empty panels

    if (nonEmptyPanels.length === 0) {
      setLoader(false);
      alert("Please enter at least 1 panel to generate comic");
      window.location.reload(); // Reload the page if no panels are entered
      return;
    }

    try {
      for (let i = 0; i < nonEmptyPanels.length; i++) {
        const panelText = nonEmptyPanels[i];
        const comicData = {
          inputs: [panelText],
        };

        const responseBlob = await query(comicData);
        if (responseBlob) {
          const imageUrl = URL.createObjectURL(responseBlob);
          generatedImages.push(imageUrl);
        }
      }
      setImages(generatedImages);
      setLoader(false)
    } catch (error) {
        alert("some error occored🥲🥲 please try again")
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Create Your Comic Strip!</h1>
      <form id="comicForm" onSubmit={handleSubmit}>
        {panels.map((panel, index) => (
          <div key={index}>
            <label htmlFor={`panel${index + 1}`}>{`Panel ${index + 1}:`}</label>
            <input
              type="text"
              id={`panel${index + 1}`}
              name={`panel${index + 1}`}
              value={panel}
              onChange={(e) => {
                const newPanels = [...panels];
                newPanels[index] = e.target.value;
                setPanels(newPanels);
              }}
            />
          </div>
        ))}
        <input type="submit" value="Generate Comic" />
      </form>
     
     {loader && <div id="loader">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
    </div>}

      <div className="grid"
        id="comicDisplay"
        ref={ref}
        >
        {images.map((imageUrl, index) => (
          <figure key={index}>
            <img src={imageUrl} alt={`Comic Strip ${index}`} />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Comic;
