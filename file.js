//defining canvas
container = document.getElementById("container")
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
let cw = canvas.width, cx = cw / 2;
let ch = canvas.height, cy = ch / 2;

let triangleIsDrawed = false;

//function for Calculate button
const drawTriangle = () => {

//side lengths
let AB = document.getElementById("a-side").value;
AB = parseInt(AB) * 10;
let BC = document.getElementById("b-side").value;
BC =  parseInt(BC) * 10;
let AC = document.getElementById("c-side").value;
AC = parseInt(AC) * 10;

//draw triangle function
const trianglePath = (side1, side2, side3) =>{
    let path=new Path2D();
    ctx.strokeStyle = "black"; 
    path.moveTo(cx+side1,cy);
    path.lineTo(cx,(cy)-side2);
    path.lineTo(cx-side3,cy);
    path.lineTo(cx+side1,cy)
    ctx.fillStyle = "white";
    ctx.fill(path);
    ctx.stroke(path)
}

//Triangle type (equilateral, isosceles, scalene, impossible triangle)
const triangleType = (side1,side2,side3) => {

    //check, if exists
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1){
        return "Non existing"
    }

    if(side1 == side2 && side2 == side3 ){
        return "Equilateral"
    }

    if(side1 == side2 || side1 == side3 || side2 == side3){
        return "Isosceles"
    }

    return "Scalene"

}




//error handling

//empty values
if(isNaN(AB)) alert("Enter valid A side value");
if(isNaN(BC)) alert("Enter valid B side value");
if(isNaN(AC)) alert("Enter valid C side value");

//negative values or 0
if(AB <= 0) alert("A side cannot be a negative number or 0");
if(BC <= 0) alert("B side cannot be a negative number or 0");
if(AC <= 0) alert("C side cannot be a negative number or 0");

//triangle is already drawed on canvas
if(triangleIsDrawed) alert("You cannot draw 2 triangles in the same window. Please, reload the page.")



//if everything is good, run the code
if((!isNaN(AB) && !isNaN(BC) && !isNaN(AC)) && (AB > 0 && BC > 0 && AC > 0) && triangleIsDrawed == false){
    ctx.font = "900 15px Verdana";
    ctx.fillText(triangleType(AB,BC,AC), (cx - 45) , (cy + 30));
    trianglePath(AB,BC,AC);
    triangleIsDrawed = true;
}



}