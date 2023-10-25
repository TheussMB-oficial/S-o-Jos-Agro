<!DOCTYPE html>
<html>
<head>
    <title>Mini Game</title>
    <style>
        #game {
            width: 300px;
            height: 300px;
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <div id="game"></div>

    <script>
        // Create a canvas element
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = 300;
        canvas.height = 300;
        document.getElementById("game").appendChild(canvas);

        // Set the initial position of the ball
        var x = canvas.width / 2;
        var y = canvas.height - 30;

        // Set the initial speed of the ball
        var dx = 2;
        var dy = -2;

        // Set the size of the ball
        var ballRadius = 10;

        // Draw the ball on the canvas
        function drawBall() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }

        // Move the ball on the canvas
        function moveBall() {
            // Bounce off the walls
            if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
                dx = -dx;
            }
            if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
                dy = -dy;
            }

            // Move the ball
            x += dx;
            y += dy;
        }

        // Draw everything on the canvas
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();
            moveBall();
        }

        // Update the game every 10 milliseconds
        setInterval(draw, 10);
    </script>
</body>
</html>
