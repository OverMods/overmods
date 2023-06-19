const searchInput = document.getElementById('modSearch');
const modNotFound = document.getElementById('modNotFound');

function searchMods() {
  // Отримати текст з інпута
  const searchText = searchInput.value.toLowerCase();

  const modBoxes = document.querySelectorAll('.modBox');

  let matchFound = false;

  modBoxes.forEach((modBox) => {
    const modTitle = modBox.querySelector('.modTitle h3').textContent.toLowerCase();

    if (modTitle.includes(searchText)) {
      modBox.style.display = 'inherit';
      matchFound = true;
    } else {
      modBox.style.display = 'none';
    }
  });

  if (matchFound) {
    modNotFound.style.display = 'none';
  } else {
    modNotFound.style.display = 'block';
  }
}

searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchMods();
  }
});