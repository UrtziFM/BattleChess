// App.js

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

// createBoard it has to be execute once DOM is already charged
document.addEventListener('DOMContentLoaded', (event) => {
    createBoard();
});
