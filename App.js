// App.js
// import AI packages
import { Chess } from 'https://cdn.jsdelivr.net/npm/chess.js@0.13.4/chess.js';
import stockfish from 'stockfish';

// Board and Pieces
const board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

const pieces = {
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
};

const chess = new Chess(); // Using chess.js
const engine = stockfish(); // Using stockfish.js

function createBoard() {
    const chessboard = document.getElementById('chessboard');
    if (!chessboard) {
        console.error('Chessboard element not found');
        return;
    }
    chessboard.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.className = `square ${(i + j) % 2 === 0 ? 'white' : 'black'}`;
            if (board[i][j]) {
                const piece = document.createElement('div');
                piece.className = 'piece';
                piece.innerText = pieces[board[i][j]];
                square.appendChild(piece);
            }
            chessboard.appendChild(square);
        }
    }
}

// Only after DOM is opened call to createBoard()
document.addEventListener('DOMContentLoaded', (event) => {
    createBoard();
});

// Making moves with AI
function makeAIMove() {
    const fen = chess.fen();
    engine.postMessage(`position fen ${fen}`);
    engine.postMessage('go depth 15');

    engine.onmessage = function(event) {
        const message = event.data;
        if (message.startsWith('bestmove')) {
            const bestMove = message.split(' ')[1];
            chess.move(bestMove);
            createBoard();
        }
    };
}

// Example to finish the game
function endGame(win) {
    document.getElementById('game-container').style.display = 'none';
    if (win) {
        document.getElementById('win').style.display = 'block';
    } else {
        document.getElementById('end').style.display = 'block';
    }
}

// Aquí debes agregar la lógica para que el jugador haga una jugada y luego llame a makeAIMove
document.getElementById('chessboard').addEventListener('click', (event) => {
    // Aquí deberías agregar la lógica para manejar el movimiento del jugador
    // Después de que el jugador haga su movimiento, llama a makeAIMove
    makeAIMove();
});
