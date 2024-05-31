class RadiatingLines {
    constructor(x, y, length, numLines, glowColor = [134, 169, 228, 150], strokeWeight = 1) {  // Default glow color set
        this.x = x;
        this.y = y;
        this.baseLength = length; // Store the initial length
        this.length = length;
        this.numLines = numLines;
        this.glowColor = glowColor;
        this.strokeWeight = strokeWeight;
    }
  
    display() {
        push();
        translate(this.x, this.y);
  
        // Apply shadow for glow effect
        drawingContext.shadowBlur = 30;
        drawingContext.shadowColor = `rgba(${this.glowColor[0]}, ${this.glowColor[1]}, ${this.glowColor[2]}, ${this.glowColor[3] / 255})`;
  
        stroke(255);
        strokeWeight(this.strokeWeight);
        strokeCap(ROUND);
        
        for (let i = 0; i < this.numLines; i++) {
            let angle = TWO_PI / this.numLines * i;
            let x2 = this.length * cos(angle);
            let y2 = this.length * sin(angle);
            line(0, 0, x2, y2);
        }
  
        pop();
  
        // Reset shadow to avoid affecting other elements
        drawingContext.shadowBlur = 0;
        drawingContext.shadowColor = 'rgba(0, 0, 0, 0)';
    }
  
    updateLengthWithEase(time) {
        let easeInOut = (1 - cos(time * PI)) / 2; // Easing function
        this.length = lerp(this.baseLength * 0.5, this.baseLength * 1.5, easeInOut); // Interpolate between 50% and 150% of base length
    }
  }
  