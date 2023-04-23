const App = {
  $: {
    /// All of our selected  HTML elements
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRound: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },
  state: {
    moves: [],
  },

  getGameStatus(moves) {
    const p1Moves = moves.filter(move => move.playerId === 1).map(move => +move.squareId);
    const p2Moves = moves.filter(move => move.playerId === 2).map(move => +move.squareId);
    const winningPatterns = [
      
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ];
    let winner = null;
    winningPatterns.forEach(pattern => {
      //console.log({pattern, p1Moves, p2Moves})
      const p1Wins = pattern.every( v => p1Moves.includes(v));
      const p2Wins = pattern.every( v => p2Moves.includes(v));
      if (p1Wins) winner = 1;
      if (p2Wins) winner = 2;
    });
    return {
      status: moves.length === 9 || winner != null ? "complete" : "in-progress", // in-progress | complete
      winner // 1 | 2 | null
    };
  },

  init() {
    App.registerEventListeners();
  },
  registerEventListeners() {
    //Done

    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItems.classList.toggle("hidden");
      console.log(event.target);
    });
    //Todo
    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("Reset the Game");
    });
    //Todo
    App.$.newRound.addEventListener("click", (event) => {
      console.log("New Round");
    });
    //TODO
    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        // Check if there is a play if so return early
        const hasMove = (squareId) => {
          const existingMove = App.state.moves.find(
            (move) => move.squareId === squareId
          );
          return existingMove !== undefined;
        };
        if (hasMove(+square.id)) {
          return;
        }
        // Determan crrent player icon to add to the score
        const lastMove = App.state.moves.at(-1);
        const getOppsitePlayer = (playerId) => (playerId === 1 ? 2 : 1);
        const currentPlayer =
          App.state.moves.length === 0
            ? 1
            : getOppsitePlayer(lastMove.playerId);

        const icon = document.createElement("i");
        if (currentPlayer === 1) {
          icon.classList.add("fa-solid", "fa-x", "yellow");
        } else {
          icon.classList.add("fa-solid", "fa-o", "turquoise");
        }
        App.state.moves.push({
          squareId: +square.id,
          playerId: currentPlayer,
        });

        square.replaceChildren(icon);
        // <i class="fa-solid fa-x yellow"></i>
        // <i class="fa-solid fa-o turquoise"></i>

        // Check for winner to tie game
        const game = App.getGameStatus(App.state.moves);
        console.log(game);
        if (game.status === 'complete'){
          if (game.winner) {
            alert(`Player ${game.winner} Wins!`)
          } else {
            alert("Tie!")
          }
        }
      });
    });
  },
};

window.addEventListener("load", App.init);
