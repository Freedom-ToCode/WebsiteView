const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');
const iFrame = document.getElementById('iFrame');

myButton.addEventListener('click', function() {
  iFrame.src = searchBar.value;
});
