// app.js

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
  
  function uploadImage() {
    const imageInput = document.getElementById('imageUpload').files[0];
    
    if (!imageInput) {
      alert("Please upload an image before submitting!");
      return;
    }
    
    // Implement the actual upload functionality here
    alert("Image uploaded successfully!");
  }
  