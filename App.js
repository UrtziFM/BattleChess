// Calling to class Gui
let game = new Game();

window.gui = new Gui(game);

window.onload = function() {
    console.log("loading...");
    window.gui.load([
        {id: "gameOn", var: playerImg = document.createElement("img"), file: "Assets/gameOnBattleChess.jpeg" },
        {id: "gameOver", var: asteroidImg =  document.createElement("img"), file: "Assets/gameOverBattleChess.png" },
        {id: "gameWin", var: asteroidImg =  document.createElement("img"), file: "Assets/gameWinBattleChess.png" }
    ]);
}

window.onresize = function(){
    console.log("resizing...");
    window.gui.resize();
}

