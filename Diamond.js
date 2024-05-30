class Diamond {
  constructor(x, y, size, colour) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.colour = colour;
  }

  display() {
    fill(this.colour); // Fill to match the background
    //stroke(0); // Stroke for the square
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size); // Draw the square

    // Draw four circles at the corners to form a diamond
    let offsets = [-0.5, 0.5];
    noStroke();
    fill(27, 27, 37); // Fill color for the circles
    for (let dx of offsets) {
      for (let dy of offsets) {
        ellipse(this.x + dx * this.size, this.y + dy * this.size, this.size, this.size);
      }
    }
  }
}
