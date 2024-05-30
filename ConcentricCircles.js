class ConcentricCircles {
  constructor(x, y, radius, levels, strokeWeight = 1, glowColors) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.levels = levels;
      this.strokeWeight = strokeWeight;
      this.glowColors = glowColors;  // Array of RGBA color values
  }

  display() {
      for (let i = 0; i < this.levels; i++) {
          let r = this.radius * ((this.levels - i) / this.levels);
          let currentColor = this.glowColors[i % this.glowColors.length];  // Cycle through provided colors

          // Set glow properties
          drawingContext.shadowBlur = 20;  // Apply consistent glow effect
          drawingContext.shadowColor = `rgba(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]}, ${currentColor[3] / 255})`;

          noFill();
          // Set stroke properties
          stroke(255); 
          strokeWeight(this.strokeWeight);

          // Enhance the glow by drawing the circle multiple times
          for (let j = 0; j < 3; j++) {  // Draw each circle 3 times to enhance the glow
            ellipse(this.x, this.y, r * 2, r * 2);
        }

          // Reset shadow properties after drawing each circle to ensure correct glow color application
          drawingContext.shadowBlur = 0;
          drawingContext.shadowColor = 'rgba(0, 0, 0, 0)';
      }
  }
}