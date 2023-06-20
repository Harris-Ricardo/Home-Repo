window.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.getElementById('checkbox');
  var acceptButton = document.getElementById('acceptButton');

  checkbox.addEventListener('change', function() {
      acceptButton.disabled = !checkbox.checked;
  });
});