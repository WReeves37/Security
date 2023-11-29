// Get the modal
var modal = document.getElementById("myModal");
var modalContent = document.getElementsByClassName("modal-content")[0];

// Function to open modal with specific content
function openModal(img) {
var productId = img.getAttribute('data-product');
var details = productDetails[productId].details;
modal.style.display = "block";
modalContent.innerHTML = '<span class="close">&times;</span>' +
                             '<img src="' + img.src + '" alt="' + img.alt + '">' +
                             details;
}
var productDetails = {
"EufyE220": {
title: "Eufy E220",
details: "<p><strong>The Key is in the Detail:</strong> View every event in up to 2K clarity, so you see exactly what is happening inside your home.</p>" +
         "<p><strong>Follows the Action:</strong> When motion is detected the camera automatically tracks and follows the moving object. Pan the lens 360° horizontally or tilt it 96° vertically to get a clear view of the whole room.</p>" +
         "<p><strong>Communicate From Your Camera:</strong> Speak in real-time to anyone who passes via the camera’s built-in two-way audio.</p>"
    }
    }
// Add event listeners to images
var images = document.querySelectorAll('[id^="clickableImage"]');
images.forEach(function(img) {
    img.onclick = function() { openModal(this); };
});

// Close modal logic
modal.onclick = function(event) {
    if (event.target.className === "close" || event.target === modal) {
        modal.style.display = "none";
    }
}