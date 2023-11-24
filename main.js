async function query(data) {
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
  }

  document.getElementById('comicForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    document.querySelector('.grid').scrollIntoView();
    
    const comicDisplay = document.getElementById('comicDisplay');
    const loader = document.getElementById('loader')
    loader.style.display = 'block'
    
    comicDisplay.innerHTML = '';
    
    const panelsCount = 10;
    
    for (let i = 1; i <= panelsCount; i++) {
      const panelText = document.getElementById(`panel${i}`).value;

      // Prepare data for API call for each panel
      const comicData = {
        "inputs": [panelText],
      };

      try {
        // Call the API with the prepared data for each panel
        const responseBlob = await query(comicData);
        if(responseBlob)
           loader.style.display = 'none'

        // Display the generated comic strip for each panel
        const imageUrl = URL.createObjectURL(responseBlob); // Create image URL from Blob
        comicDisplay.innerHTML += `<figure><img src="${imageUrl}" alt="Comic Strip"></figure>`;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
