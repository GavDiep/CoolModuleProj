/* FUNCTIONS MODULE ASSIGNMENT
Demonstrating knowledge of functions with parameters and return values using the myCanvas
*/

// *** Don't forget to add your graphics and random libraries! ***

// Color variables
let backDropColor = prompt(
  "Type a color you want the sky to be.\n(If the color has 2 words, don't input a space and capitalize the first letter of the second word E.g lightBlue)"
);

if (backDropColor == "" || backDropColor == " ") {
  backDropColor = "lightBlue";
}

// Canvas setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 600;

// Do not add/remove code from this section:
// ***************************************************
// Global Vars
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("X: " + mouseX + "  Y: " + mouseY);
}
// ***************************************************

// drawStickman(100, 100, "blue");
// drawStickman(250, 100, "red");

// drawStickman(getLocationX(), 200, "green");

drawBackdrop(backDropColor);
drawDock();
drawFlak(250, 380, "destroyed");
drawFlak(200, 380);
drawFlak(150, 380);
drawFlak(25, 325, "destroyed");

// Planes
ctx.translate(230, 72);
ctx.rotate(-0.3);
drawPlane(300, 105, 0.5, "yellow");
drawPlane(300, 50, 0.4, "darkGreen");
drawPlane(200, 50, 0.1, "darkBlue");
drawPlane(250, -100, 0.1, "red");
drawPlane(-500, 375, 0.5, "red", "crashed");
drawPlane(400, -250, 0.1, "green");
drawBomb(10, 225, "grey");
ctx.rotate(0.3);
ctx.translate(0, 0);
drawPlane(185, 125, 0.3);
