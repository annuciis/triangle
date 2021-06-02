//defining canvas
window.onload = function(){
const container = document.getElementById("container");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let cw = canvas.width,
  cx = cw / 2;
let ch = canvas.height,
  cy = ch / 2;


let triangleIsDrawed = false;



//function for Calculate button
const drawTriangle = () => {
  //side lengths
  let AB = document.getElementById("a-side").value;
  AB = parseInt(AB) * 10;
  let BC = document.getElementById("b-side").value;
  BC = parseInt(BC) * 10;
  let AC = document.getElementById("c-side").value;
  AC = parseInt(AC) * 10;

  let C_x_coord = (AC * AC - BC * BC + AB * AB) / (2 * AB);

  //draw triangle function
  const trianglePath = (side1, side2, side3) => {
    let path = new Path2D();
    ctx.strokeStyle = "black";
    path.moveTo(120, 20);
    path.lineTo(AB + 120, 20);
    path.lineTo(C_x_coord + 120, Math.sqrt(AC * AC - C_x_coord * C_x_coord));
    path.lineTo(120, 20);
    ctx.fillStyle = "white";
    ctx.fill(path);
    ctx.stroke(path);
  };

  //Triangle type (equilateral, isosceles, scalene, impossible triangle)

  const triangleType = (side1, side2, side3) => {
    //check, if exists
    if (
      side1 + side2 <= side3 ||
      side1 + side3 <= side2 ||
      side2 + side3 <= side1
    ) {
      return "Non existing";
    }

    if (side1 === side2 && side2 === side3) {
      return "Equilateral";
    }

    if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "Isosceles";
    }

    return "Scalene";
  };


  //error handling

  //empty values
  if (isNaN(AB)) alert("Enter valid A side value");
  if (isNaN(BC)) alert("Enter valid B side value");
  if (isNaN(AC)) alert("Enter valid C side value");

  //negative values or 0
  if (AB <= 0) alert("A side cannot be a negative number or 0");
  if (BC <= 0) alert("B side cannot be a negative number or 0");
  if (AC <= 0) alert("C side cannot be a negative number or 0");

  //triangle is already drawed on canvas
  if (triangleIsDrawed)
    alert(
      "You cannot draw 2 triangles in the same window. Please, reload the page."
    );

  //if everything is good, run the code
  if (
    !isNaN(AB) &&
    !isNaN(BC) &&
    !isNaN(AC) &&
    AB > 0 &&
    BC > 0 &&
    AC > 0 &&
    triangleIsDrawed == false
  ) {
    ctx.font = "900 15px Verdana";
    ctx.fillText(triangleType(AB, BC, AC), cx - 45, cy + 30);
    trianglePath(AB, BC, AC);
    triangleIsDrawed = true;
  }
};

document.getElementById("calculate-button").onclick = drawTriangle;

}

