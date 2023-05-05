const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const squareSize = 50;
const squareColor = "#0d70b9";


ctx.fillStyle = squareColor;
ctx.fillRect(50, 50, squareSize, squareSize);
ctx.fillRect(123, 49, squareSize, squareSize);
ctx.fillRect(250, 250, squareSize, squareSize);
ctx.fillRect(500, 123, squareSize, squareSize);
ctx.fillRect(450, 840, squareSize, squareSize);
ctx.fillRect(500, 12, squareSize, squareSize);
ctx.fillRect(500, 50, squareSize, squareSize);
ctx.fillRect(1230, 490, squareSize, squareSize);
ctx.fillRect(2500, 500, squareSize, squareSize);
ctx.fillRect(5000, 210, squareSize, squareSize);
ctx.fillRect(4500, 320, squareSize, squareSize);
ctx.fillRect(5000, 152, squareSize, squareSize);
ctx.fillRect(20, 500, squareSize, squareSize);
ctx.fillRect(40, 500, squareSize, squareSize);
ctx.fillRect(500, 1800, squareSize, squareSize);
ctx.fillRect(50, 50, squareSize, squareSize);
ctx.fillRect(canvas.width - 50 - squareSize, 50, squareSize, squareSize);
ctx.fillRect(canvas.width - 50 - squareSize, canvas.height - 50 - squareSize, squareSize, squareSize);
ctx.fillRect(50, canvas.height - 50 - squareSize, squareSize, squareSize); 
ctx.fillRect(50, canvas.height / 2 - squareSize / 2, squareSize, squareSize); 
ctx.fillRect(canvas.width - 50 - squareSize, canvas.height / 2 - squareSize / 2, squareSize, squareSize);
ctx.fillRect(canvas.width / 2 - squareSize / 2, 50, squareSize, squareSize); 
ctx.fillRect(canvas.width / 2 - squareSize / 2, canvas.height - 50 - squareSize, squareSize, squareSize);
ctx.fillRect(50, canvas.height - 50 * 3 - squareSize * 2, squareSize, squareSize); 
ctx.fillRect(canvas.width - 50 - squareSize, canvas.height - 50 * 3 - squareSize * 2, squareSize, squareSize);
ctx.fillRect(canvas.width / 3 - squareSize / 2, canvas.height / 3 - squareSize / 2, squareSize, squareSize);
ctx.fillRect(canvas.width / 3 * 2 - squareSize / 2, canvas.height / 3 - squareSize / 2, squareSize, squareSize); 
ctx.fillRect(canvas.width / 3 - squareSize / 2, canvas.height / 3 * 2 - squareSize / 2, squareSize, squareSize);
ctx.fillRect(canvas.width / 3 * 2 - squareSize / 2, canvas.height / 3 * 2 - squareSize / 2, squareSize, squareSize); 
ctx.fillRect(canvas.width / 2 - squareSize / 2, canvas.height / 2 - squareSize / 2, squareSize, squareSize); 