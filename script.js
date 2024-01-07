var video = document.getElementById("bgVideo");

function playVideo() {
  if (video.paused) {
    video.style.display = "block";
    video.play();
    removeClickHere()
  } else {
    video.pause();
  }
}

const clickHere = document.querySelector('.click-here')
const clicked = false

function removeClickHere(){
  if (!clicked){
    clickHere.style.display = 'none'
  }
}


function toggleMute() {
  const muteButton = document.getElementById('mute-button')

  if (video.muted) {
    video.muted = false;
    muteButton.src = 'volume-off-svgrepo-com.svg'
  } else {
    video.muted = true;
    console.log('mute')
    muteButton.src = 'volume-cross-svgrepo-com.svg'
  }
}



function toggleFullscreen() {
  if (!document.fullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
      document.documentElement.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }
}



document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("mousemove", function(event) {
    var hiddenDiv = document.getElementById("hiddenDiv");
    // Check if the mouse is on the left side of the page (e.g., within 100 pixels)
    if (event.clientX < 300) { 
      hiddenDiv.style.display = "block"; // Display the hidden div
    } else {
      hiddenDiv.style.display = "none"; // Hide the div if not on the left side
    }
  });
});





document.addEventListener("DOMContentLoaded", function() {
  var popupDiv = document.querySelector('.popup')

  // Show the popup initially (You may trigger this as needed)
  popupDiv.style.display = "block";

  // Schedule the fade-out after 4 seconds
  setTimeout(function() {
    popupDiv.style.opacity = 0;
    // Hide the popup after the fade-out
    setTimeout(function() {
      popupDiv.style.display = "none";
    }, 500); // Adjust this delay to match the transition duration
  }, 4000); // 4 seconds
});
