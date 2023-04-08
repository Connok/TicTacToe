const App = {
  $: {
    /// All of our selected  HTML elements
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRound: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
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
      });
    });
  },
};

window.addEventListener("load", App.init);
