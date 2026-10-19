let gameSeq = [];
let userSeq = [];
const btns = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;
let highScore = 0;

const levelDisplay = document.querySelector("#level-display");
const highScoreDisplay = document.querySelector("#high-score-display");
const statusText = document.querySelector("#status-text");
const startBtn = document.querySelector("#start-btn");
const tiles = document.querySelectorAll(".tile");

// Start / Restart trigger
startBtn.addEventListener("click", startGame);
document.addEventListener("keydown", (e) => {
    if (!started && (e.key === "Enter" || e.key === " ")) {
        startGame();
    }
});

function startGame() {
    if (!started) {
        started = true;
        level = 0;
        gameSeq = [];
        startBtn.style.display = "none";
        statusText.innerText = "Get Ready!";
        setTimeout(levelUp, 600);
    }
}

function flashTile(tile) {
    tile.classList.add("active");
    setTimeout(() => {
        tile.classList.remove("active");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    levelDisplay.innerText = level;
    statusText.innerText = "Watch!";

    // Pick 1 new color and append to sequence
    const randIdx = Math.floor(Math.random() * 4);
    const randColor = btns[randIdx];
    gameSeq.push(randColor);

    // Flash ONLY the newly added color
    const newTile = document.querySelector(`#${randColor}`);
    setTimeout(() => {
        flashTile(newTile);
        statusText.innerText = "Your Turn";
    }, 400);
}

function checkAnswer(currentIndex) {
    if (userSeq[currentIndex] === gameSeq[currentIndex]) {
        // If user finished entering the complete pattern for this round
        if (userSeq.length === gameSeq.length) {
            statusText.innerText = "Correct!";
            setTimeout(levelUp, 800);
        }
    } else {
        // Handle Game Over
        const currentScore = level - 1;
        if (currentScore > highScore) {
            highScore = currentScore;
            highScoreDisplay.innerText = highScore;
        }

        statusText.innerText = "Wrong!";
        startBtn.innerText = "RETRY";
        startBtn.style.display = "block";

        document.body.classList.add("error-flash");
        setTimeout(() => {
            document.body.classList.remove("error-flash");
        }, 300);

        resetGame();
    }
}

function handleTileClick() {
    if (!started) return;

    const selectedColor = this.getAttribute("data-color");
    flashTile(this);
    userSeq.push(selectedColor);

    checkAnswer(userSeq.length - 1);
}

tiles.forEach((tile) => tile.addEventListener("click", handleTileClick));

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    levelDisplay.innerText = 0;
}