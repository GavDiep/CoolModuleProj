// function drawStickman(x, y, color) {
//   // Head
//   ctx.strokeStyle = color;
//   ctx.lineWidth = 2;

//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, 2 * Math.PI); // 250, 100 (x.y)
//   ctx.stroke();

//   // Torso
//   ctx.beginPath();
//   ctx.moveTo(x, y + 30);
//   ctx.lineTo(x, y + 100);
//   ctx.stroke();

//   // Left leg
//   ctx.beginPath();
//   ctx.moveTo(x, y + 100);
//   ctx.lineTo(x - 25, y + 150);
//   ctx.stroke();

//   // Right leg
//   ctx.beginPath();
//   ctx.moveTo(x, y + 100);
//   ctx.lineTo(x + 25, y + 150);
//   ctx.stroke();

//   // Lefto armo
//   ctx.beginPath();
//   ctx.moveTo(x, y + 60);
//   ctx.lineTo(x - 40, y + 30);
//   ctx.stroke();

//   // righto armo
//   ctx.beginPath();
//   ctx.moveTo(x, y + 60);
//   ctx.lineTo(x + 40, y + 30);
//   ctx.stroke();
// }

// Exercise
// give function ability to changecolor of the stickman
// update function calls to see news tickman
// size of head (scale)

// img variables
var flame = document.getElementById("flameImg");

function getLocationX() {
  let x = +prompt("Enter an x-value 0 - 500");
  return x;
}

function drawPlane(x, y, scale, color, state) {
  // OG Coordinates (210, 105)

  // Cockpit

  ctx.fillStyle = "lightGrey";

  ctx.beginPath();
  ctx.moveTo(x * scale, y * scale);
  ctx.lineTo((x - 5) * scale, (y + 15) * scale);
  ctx.lineTo((x + 80) * scale, (y + 15) * scale);
  ctx.lineTo((x + 75) * scale, y * scale);
  ctx.lineTo(x * scale, y * scale);
  ctx.fill();

  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(x * scale, y * scale);
  ctx.lineTo((x - 5) * scale, (y + 15) * scale);
  ctx.lineTo((x + 80) * scale, (y + 15) * scale);
  ctx.lineTo((x + 75) * scale, y * scale);
  ctx.lineTo(x * scale, y * scale);
  ctx.stroke();

  // Plane Body
  // OG Coordinates (210, 105)

  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo((x - 5) * scale, (y + 15) * scale);
  ctx.lineTo((x - 25) * scale, (y + 20) * scale);
  ctx.lineTo((x - 25) * scale, (y + 40) * scale);
  ctx.lineTo((x - 20) * scale, (y + 45) * scale);
  ctx.lineTo((x + 130) * scale, (y + 45) * scale);
  ctx.lineTo((x + 215) * scale, (y + 30) * scale);
  ctx.lineTo((x + 80) * scale, (y + 15) * scale);
  ctx.fill();

  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";

  ctx.beginPath();
  ctx.moveTo((x - 5) * scale, (y + 15) * scale);
  ctx.lineTo((x - 25) * scale, (y + 20) * scale);
  ctx.lineTo((x - 25) * scale, (y + 40) * scale);
  ctx.lineTo((x - 20) * scale, (y + 45) * scale);
  ctx.lineTo((x + 130) * scale, (y + 45) * scale);
  ctx.lineTo((x + 215) * scale, (y + 30) * scale);
  ctx.lineTo((x + 80) * scale, (y + 15) * scale);
  ctx.stroke();

  // Plane Tail
  // OG Coordinates (210, 105)

  ctx.beginPath();
  ctx.moveTo((x + 175) * scale, (y + 25) * scale);
  ctx.lineTo((x + 205) * scale, (y + 30) * scale);
  ctx.lineTo((x + 200) * scale, (y - 5) * scale);
  ctx.lineTo((x + 190) * scale, (y - 15) * scale);
  ctx.lineTo((x + 175) * scale, (y + 25) * scale);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo((x + 175) * scale, (y + 25) * scale);
  ctx.lineTo((x + 205) * scale, (y + 30) * scale);
  ctx.lineTo((x + 200) * scale, (y - 5) * scale);
  ctx.lineTo((x + 190) * scale, (y - 15) * scale);
  ctx.lineTo((x + 175) * scale, (y + 25) * scale);
  ctx.stroke();

  // Plane Wing
  // OG Coordinates (210, 105)

  ctx.beginPath();
  ctx.moveTo((x + 15) * scale, (y + 20) * scale);
  ctx.lineTo((x + 40) * scale, (y + 70) * scale);
  ctx.lineTo((x + 60) * scale, (y + 60) * scale);
  ctx.lineTo((x + 55) * scale, (y + 30) * scale);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo((x + 15) * scale, (y + 20) * scale);
  ctx.lineTo((x + 40) * scale, (y + 70) * scale);
  ctx.lineTo((x + 60) * scale, (y + 60) * scale);
  ctx.lineTo((x + 55) * scale, (y + 30) * scale);
  ctx.stroke();

  // Propeller/Engine/front of plane
  // OG Coordinates (210, 105)
  ctx.fillStyle = "black";

  ctx.beginPath();
  ctx.moveTo((x - 25) * scale, (y + 20) * scale);
  ctx.lineTo((x - 35) * scale, (y + 20) * scale);
  ctx.lineTo((x - 35) * scale, (y + 40) * scale);
  ctx.lineTo((x - 25) * scale, (y + 40) * scale);
  ctx.fill();

  ctx.strokeStyle = "grey";
  ctx.moveTo((x - 35) * scale, (y + 5) * scale);
  ctx.lineTo((x - 35) * scale, (y + 55) * scale);
  ctx.stroke();

  if (state == "crashed") {
    ctx.beginPath();
    ctx.drawImage(flame, x + 220, y - 225, 100, 75);
  }
}

function drawBackdrop(skyColor) {
  // Sky
  ctx.fillStyle = skyColor;
  ctx.fillRect(0, 0, 500, 600);

  // Water
  ctx.fillStyle = "rgb(103, 169, 245)";
  ctx.fillRect(0, 450, 500, 200);

  // Hangar roof
  ctx.lineWidth = 3;
  ctx.fillStyle = "grey";

  ctx.fillRect(-2, 345.75, 70, 29);

  ctx.beginPath();
  ctx.arc(75, 375, 30, 1 * Math.PI, 0);
  ctx.fill();

  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(75, 375, 30, 1 * Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(67, 345.75);
  ctx.lineTo(-2, 345.75);
  ctx.lineTo(-2, 373);
  ctx.stroke();

  // Hangar walls

  ctx.fillRect(47, 375, 58, 25);
  ctx.strokeRect(47, 375, 58, 25);

  ctx.fillRect(0, 375, 47, 25);
  ctx.strokeRect(0, 375, 47, 25);
}

function drawDock() {
  // docking platform
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.fillStyle = "lightGrey";

  ctx.strokeRect(0, 400, 275, 100);
  ctx.fillRect(0, 400, 275, 100);
}

function drawFlak(x, y, state) {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1.5;
  ctx.fillStyle = "darkGrey";

  // OG COORDINATE 200, 380
  // Regular scale = 1
  // Turret Head
  ctx.fillRect(x, y, 20, 10);
  ctx.strokeRect(x, y, 20, 10);

  // Turret Base
  ctx.fillRect(x + 5, y + 10, 10, 10);
  ctx.strokeRect(x + 5, y + 10, 10, 10);

  if (state == "destroyed") {
    ctx.beginPath();
    ctx.drawImage(flame, x - 15, y - 15, 50, 30);
  } else {
    // turret Barrel
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 20, y);
    ctx.lineTo(x + 35, y - 10);
    ctx.stroke();
  }
}

function drawBomb(x, y, color) {
  // OG COORDINATES (100, 150)

  // Fins
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.moveTo(x + 45, y + 12.5);
  ctx.lineTo(x + 100, y + 32.5);
  ctx.lineTo(x + 85, y + 12.5);
  ctx.lineTo(x + 100, y - 7.5);
  ctx.lineTo(x + 45, y + 12.5);
  ctx.fill();

  // Bomb chassis (body?)
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 75, 25);

  // Nose Cone
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y + 12.5, 12.5, 2.5 * Math.PI, 1.5 * Math.PI);
  ctx.fill();
}
