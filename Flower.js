class Flower {
  constructor(x, y, petalCount, petalWidth, petalHeight, petalColor, centerSize, circleColor = [255, 171, 59, 150], numCircles = 3, glowColour = [255, 171, 59, 150]) {
    this.x = x;
    this.y = y;
    this.petalCount = petalCount; // Number of petals
    this.petalWidth = petalWidth;
    this.petalHeight = petalHeight;
    this.petalColor = petalColor;
   // this.centerColor = centerColor;
    this.centerSize = centerSize;
    this.circleColor = circleColor; // Color for concentric circles (default white)
    this.numCircles = numCircles; // Number of concentric circles
    this.glowColour = glowColour;
  }

  display() {
    push();
    translate(this.x, this.y);

    // Draw flower petals with outer glow
    fill(this.petalColor);
    noStroke();
    let angleStep = TWO_PI / this.petalCount;
    for (let i = 0; i < this.petalCount; i++) {
      let angle = i * angleStep;
      push();
      rotate(angle);

      // Draw the main petal
      ellipse(this.petalHeight / 2, 0, this.petalHeight, this.petalWidth); // Swap width and height to rotate ellipse

      // Draw the outer glow ellipse (adjust color and opacity)
      fill(color(this.petalColor[0] + 50, this.petalColor[1] + 50, this.petalColor[2] + 50, 100)); // Brighter color with lower opacity
      ellipse(this.petalHeight / 2 + 1, 0, this.petalHeight + 2, this.petalWidth + 2); // Slightly larger with offset

      pop();
    }

    // Draw flower center
    fill(this.circleColor);
    let circle = new GlowingCircle(0, 0, this.centerSize, this.circleColor); // Create GlowingCircle object with adjustments
        circle.display();
    pop();
  }
}