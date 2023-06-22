let input = document.getElementById('gameSearch');
  let games = document.querySelectorAll(".game");
  let gameNotFound = document.getElementById('gameNotFound');

  input.addEventListener('input', function() {
    let searchTerm = input.value.toLowerCase();
    let gameFound = false;

    games.forEach(function(game) {
      let gameTitle = game.querySelector("p").getAttribute("game");

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
      gameNotFound.style.display = 'flex';
    }
  });