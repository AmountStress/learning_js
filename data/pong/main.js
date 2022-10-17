
(function () {
    self.Board = function (width, height) {
        this.width = width;
        this.height = height;
        this.playing = false;
        this.gameOver = false;
        this.bars = [];
        this.ball = null;
        this.playing = false;
    }
    self.Board.prototype = {
        get elements() {
            let elements = this.bars.map(function (bar) { return bar; });
            elements.push(this.ball);
            return elements;
        }
    }
})();

(function () {
    self.Ball = function (x, y, radius, board) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedY = 0;
        this.speedX = 3;
        this.board = board;
        this.direction = 1;
        board.ball = this;
        this.kind = "circle";
    }
    self.Ball.prototype = {
        move: function () {
            this.x += (this.speedX * this.direction);
            this.y += (this.speedY);
        },
        collision: function(bar){

        }
    }
})();

(function () {
    self.Bar = function (x, y, width, height, board) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this);
        this.kind = "rectangle";
        this.speed = 10;
    }
    self.Bar.prototype = {
        down: function () {
            this.y += this.speed;
        },
        up: function () {
            this.y -= this.speed;
        },
    }
}());


(function () {
    self.BoardView = function (canvas, board) {
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");
    }
    self.BoardView.prototype = {
        clean: function () {
            this.ctx.clearRect(0, 0, this.board.width, this.board.height);
        },
        draw: function () {
            for (let i = this.board.elements.length - 1; i >= 0; i--) {
                let el = this.board.elements[i];
                draw(this.ctx, el);
            }
        },
        checkCollision: function () {
            for (let i = this.board.elements.length - 1; i >= 0; i--) {
                let bar = this.board.bars[i];
                if (hit(bar, this.board.ball)) {
                    this.board.ball.collision(Board);
                }
            }


        },
        play: function () {
            if (this.board.playing) {
                this.clean();
                this.draw();
                this.board.ball.move();
            }
        }
    }
    function hit(a, b) {

    }


    function draw(ctx, element) {
        switch (element.kind) {
            case "rectangle":
                ctx.fillRect(element.x, element.y, element.width, element.height);
                break;
            case "circle":
                ctx.beginPath();
                ctx.arc(element.x, element.y, element.radius, 0, 7);
                ctx.fill();
                ctx.closePath();
                break;
        }

    }
})();

let board = new Board(800, 400);
let bar1 = new Bar(20, 100, 40, 100, board);
let bar2 = new Bar(735, 100, 40, 100, board);
let canvas = document.getElementById("canvas");
let boardView = new BoardView(canvas, board);
let ball = new Ball(350, 100, 10, board);

document.addEventListener("keydown", function (ev) {
    if (ev.key === "ArrowUp") {
        //Para que no se moviera la screen
        ev.preventDefault();
        bar1.up();
    }
    if (ev.key === "ArrowDown") {
        ev.preventDefault();
        bar1.down();
    }
    if (ev.key === "w") {
        ev.preventDefault();
        bar2.up();
    }
    if (ev.key === "s") {
        ev.preventDefault();
        bar2.down();
    }
    if (ev.key === " ") {
        ev.preventDefault();
        board.playing = !board.playing;
    }
});

boardView.draw();
window.requestAnimationFrame(controller);

function controller() {
    boardView.play();
    window.requestAnimationFrame(controller);
}; 