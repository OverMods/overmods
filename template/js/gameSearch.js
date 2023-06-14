var input = document.getElementById('gameSearch');
var games = document.querySelectorAll(".game");
var gameNotFound = document.getElementById('gameNotFound');

input.addEventListener('input', function() {
  var searchTerm = input.value.toLowerCase();
  var gameFound = false;

  games.forEach(function(game) {
    var gameTitle = game.querySelector("p").getAttribute("game");

    if (gameTitle.toLowerCase().includes(searchTerm)) {
      game.style.display = 'flex';
      gameFound = true;
    } else {
      game.style.display = 'none';
    }
  });

  if (gameFound) {
    gameNotFound.style.display = 'none';
  } else {
    gameNotFound.style.display = 'block';
  }
});
