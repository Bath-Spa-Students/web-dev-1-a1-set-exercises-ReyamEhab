document.addEventListener("DOMContentLoaded", function() {
  const samplesPerPage = 9;
  const samples = document.querySelectorAll('.sample');
  let currentPage = 0;
  const totalPages = Math.ceil(samples.length / samplesPerPage);
  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');
  
  // Hide or show navigation buttons based on current page
  function toggleNavigationButtons() {
    if (currentPage === 0) {
      prevPageButton.style.display = 'none';
    } else {
      prevPageButton.style.display = 'inline-block';
    }
    
    if (currentPage === totalPages - 1) {
      nextPageButton.style.display = 'none';
    } else {
      nextPageButton.style.display = 'inline-block';
    }
  }
  
  // Function to handle scrolling to the previous page
  prevPageButton.addEventListener('click', function() {
    if (currentPage > 0) {
      currentPage--;
      updateSamplesVisibility();
      toggleNavigationButtons();
    }
  });
  
  // Function to handle scrolling to the next page
  nextPageButton.addEventListener('click', function() {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateSamplesVisibility();
      toggleNavigationButtons();
    }
  });
  
  // Function to update the visibility of samples based on the current page
  function updateSamplesVisibility() {
    const startIndex = currentPage * samplesPerPage;
    const endIndex = startIndex + samplesPerPage;
    
    samples.forEach(function(sample, index) {
      if (index >= startIndex && index < endIndex) {
        sample.style.display = 'block';
      } else {
        sample.style.display = 'none';
      }
    });
  }
  
  // Initialize sample visibility and navigation buttons
  updateSamplesVisibility();
  toggleNavigationButtons();
  
  // Text-to-speech functionality
  const playTextButton = document.getElementById('playText');
  const textInput = document.getElementById('textInput');
  
  playTextButton.addEventListener('click', function() {
    const text = textInput.value;
    if (text.trim() !== '') {
      speakText(text);
    }
  });
  
  function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
});
