const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');
const iFrame = document.getElementById('iFrame');
const title = document.getElementById('title');

myButton.addEventListener('click', function() {
  iFrame.src = searchBar.value;
  title.value = "Website Viewing"
});
