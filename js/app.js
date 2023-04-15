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
    currentPLayer: 1,
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
        console.log(`Square with id ${event.target.id} was clicked`);
        console.log(`Current player is ${App.state.currentPLayer}`);

        // Check if there is a play if so return early
        if (square.hasChildNodes()) {
          return;
        }
        // Determan crrent player icon to add to the score
        const currentPlayer = App.state.currentPLayer;
        const icon = document.createElement("i");
        if (currentPlayer === 1) {
          icon.classList.add("fa-solid", "fa-x", "yellow");
        } else {
          icon.classList.add("fa-solid", "fa-o", "turquoise");
        }
        App.state.currentPLayer = App.state.currentPLayer === 1 ? 2 : 1;
        square.replaceChildren(icon);
        // <i class="fa-solid fa-x yellow"></i>
        // <i class="fa-solid fa-o turquoise"></i>

        // Check for winner to tie game
        const winningPatterns = [
          [1, 2, 3],
          [1, 5, 9],
          [1, 4, 7],
          [2, 5, 8],
          [5, 5, 7],
          [3, 6, 9],
          [7, 8, 9],
        ];
      });
    });
  },
};

window.addEventListener("load", App.init);
