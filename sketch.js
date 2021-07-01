function setup() {
  var cnv = createCanvas(window.innerWidth, window.innerHeight)
	cnv.parent("cnv");
}


function draw() {

  if(mouseIsPressed){
    fill(0);
  } else {
    fill(247, 247, 247);
  }
  ellipse(mouseX, mouseY, 80,80);
  stroke(247, 247, 247)

  //bewegende lijnen
  for (let i = 0, color = 0; i < 50; i++, color += 5) {
    let randomNumber = random(windowWidth)
    strokeWeight(3)
    stroke(color, color / 2, 100)
    line(window.innerWidth, i * 8, 10 + randomNumber, 0)
    stroke(255, color *2, color, color)
  }

}