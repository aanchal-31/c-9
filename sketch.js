var a=prompt('Enter the first number:');
var b=prompt('ENTER THE SECOND NUMBER');

function setup() {
  createCanvas(400, 400);
  var b2=createButton("click here to swap");
  b2.mousePressed(swap);
  

} 

function draw() {
  background("black");
}

function swap(){
[a,b]=[b,a];
console.log("the value of a after swapping" , +a);
console.log("the value of b after swapping" , +b);

}