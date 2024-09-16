// app.js

async function uploadImage() {
    const imageInput = document.getElementById('imageUpload').files[0];
  
    if (!imageInput) {
      alert("Please upload an image before submitting!");
      return;
    }
  
    const formData = new FormData();
    formData.append('image', imageInput);
  
    try {
      const response = await fetch('https://api.deepai.org/api/colorizer', {
        method: 'POST',
        headers: {
          'api-key': '22e9bd5c-12fc-47bf-b877-53a2b59627ab', // Replace with your actual API key from DeepAI
        },
        body: formData,
      });
  
      console.log('API response status:', response.status); // Log response status
  
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        const errorText = await response.text(); // Retrieve error text from response
        throw new Error(`HTTP error! Status: ${response.status}. Response: ${errorText}`);
      }
  
      const data = await response.json();
  
      // Log the API response
      console.log('API response data:', data);
  
      // Validate the response
      if (data.output_url) {
        const colorizedImageUrl = data.output_url;
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = colorizedImageUrl;
        imagePreview.style.display = 'block';
      } else {
        throw new Error('Invalid response format from API');
      }
  
    } catch (error) {
      console.error("Error uploading and processing image:", error);
      alert("Failed to process image. Please try again. See console for details.");
    }
  }
  
  function previewImage(event) {
    const file = event.target.files[0];
    const imagePreview = document.getElementById('imagePreview');
    
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid image file.');
      imagePreview.style.display = 'none'; // Hide preview if file is not valid
    }
  }
  