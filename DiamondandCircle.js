class DiamondAndCircle {
  constructor(xPos, yPos, size, colourDiamond, colourCircles, glowColor) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = size;
    this.colourDiamond = colourDiamond;
    this.colourCircles = colourCircles;
    this.glowColor = glowColor;
  }

  display() {
    fill(this.colourDiamond);
    rectMode(CENTER);
    rect(this.xPos, this.yPos, this.size, this.size);

    let offsets = [-0.5, 0.5];
    let midOffset = 0.75;

    noStroke();
    fill(27, 27, 37);
    for (let dx of offsets) {
      for (let dy of offsets) {
        ellipse(this.xPos + dx * this.size, this.yPos + dy * this.size, this.size, this.size);
      }
    }

    // Draw each small circle multiple times with different shadow blurs
    for (let dx of offsets) {
      for (let dy of offsets) {
        let x = this.xPos + dx * this.size * midOffset;
        let y = this.yPos + dy * this.size * midOffset;
        let size = this.size * 0.2;
        for (let i = 0; i < 5; i++) {  // Draw 5 layers of circles
          let circle = new GlowingCircle(x, y, size, this.adjustGlowColor(i, this.glowColor));
          circle.display();
        }
      }
    }
  }

  // Function to adjust the glow color based on the layer
  adjustGlowColor(layerIndex, glowColor) {
    let alpha = glowColor[3] / 255 * (100 + 20 * layerIndex);  // Increase alpha with each layer
    return [glowColor[0], glowColor[1], glowColor[2], alpha];
  }
}
