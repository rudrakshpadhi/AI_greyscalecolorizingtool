// app.js

async function uploadImage() {
    const imageInput = document.getElementById('imageUpload').files[0];
  
    if (!imageInput) {
      alert("Please upload an image before submitting!");
      return;
    }
  
    const formData = new FormData();
    formData.append('image', imageInput);
  
    // Call the colorization API
    try {
      const response = await fetch('https://api.deepai.org/api/colorizer', {
        method: 'POST',
        headers: {
          'api-key': '22e9bd5c-12fc-47bf-b877-53a2b59627ab', // Replace with your actual API key from DeepAI
        },
        body: formData,
      });
  
      const data = await response.json();
  
      // Handle the API response (colorized image URL)
      const colorizedImageUrl = data.output_url;
  
      // Update the image preview with the colorized image
      const imagePreview = document.getElementById('imagePreview');
      imagePreview.src = colorizedImageUrl;
      imagePreview.style.display = 'block';
  
    } catch (error) {
      console.error("Error uploading and processing image:", error);
      alert("Failed to process image.");
    }
  }
  
  function previewImage(event) {
    const file = event.target.files[0];
    const imagePreview = document.getElementById('imagePreview');
    
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  }
  
  