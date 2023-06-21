ads
window.addEventListener('DOMContentLoaded', function() {
  var adStrip = document.getElementById('adStrip');
  var ads = adStrip.getElementsByClassName('ad');
  var currentAdIndex = 0;
  var adInterval = 3000; // Change this value to adjust the ad rotation interval (in milliseconds)

  function rotateAds() {
      ads[currentAdIndex].style.display = 'none';
      currentAdIndex = (currentAdIndex + 1) % ads.length;
      ads[currentAdIndex].style.display = 'inline-block';
  }

  // Initial ad display
  ads[currentAdIndex].style.display = 'inline-block';

  // Start rotating ads
  setInterval(rotateAds, adInterval);
});