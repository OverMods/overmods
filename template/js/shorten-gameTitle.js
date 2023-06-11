var gameTitles = document.querySelectorAll('.game_selection .game p');

gameTitles.forEach(function(titleElement) {
  var maxLength = 13;
  var title = titleElement.textContent;
  var filteredTitle = title.replace(/[:\s]/g, '');

  if (filteredTitle.length > maxLength) {
    var shortenedTitle = title.substring(0, maxLength) + '...';
    titleElement.textContent = shortenedTitle;

    var gameElement = titleElement.closest('.game');
    var fadeElement = document.createElement('div');
    fadeElement.classList.add('fade');
    gameElement.appendChild(fadeElement);
  }
});
