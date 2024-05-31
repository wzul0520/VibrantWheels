class BrokenChainedCircles {
    constructor(x, y, radius, count, glowColor, circleColor, strokeWeight) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.count = count;
        this.glowColor = glowColor;
        this.circleColor = circleColor;
        this.strokeWeight = strokeWeight;
        this.sizePattern = [1.0, 0.8, 0.6, 0.8, 1.0, 1.2, 1.4, 1.2];
        this.rotationAngle = 0; // Initialize rotation angle
        this.setupPositions();
    }

    setupPositions() {
        this.positions = [];
        let angleStep = 2 * PI / this.count; // Evenly spaced angles
        let angle = 0;

        for (let i = 0; i < this.count; i++) {
            let sizeMultiplier = this.sizePattern[i % this.sizePattern.length];
            let circleDiameter = ((1.5 * PI * this.radius) / this.count) * sizeMultiplier * 0.5; // Adjust the 0.5 scaling factor as needed

            let posX = cos(angle) * this.radius;
            let posY = sin(angle) * this.radius;
            this.positions.push({ x: posX, y: posY, diameter: circleDiameter });

            angle += angleStep; // Increment angle for the next circle
        }
    }

    display() {
        push();
        translate(this.x, this.y); // Move the origin to the center of the group
        rotate(this.rotationAngle); // Rotate the entire group
        blendMode(ADD);
        for (let pos of this.positions) {
            this.applyGlow(pos.x, pos.y, pos.diameter);
        }
        blendMode(BLEND);
        pop();
    }

    applyGlow(x, y, diameter) {
        let glowColor = color(this.glowColor[0], this.glowColor[1], this.glowColor[2], this.glowColor[3]);
        drawingContext.shadowBlur = 50;
        drawingContext.shadowColor = glowColor;

        let circleColor = color(this.circleColor[0], this.circleColor[1], this.circleColor[2], this.circleColor[3]);
        noFill();
        stroke(circleColor);
        strokeWeight(this.strokeWeight);

        for (let i = 0; i < 3; i++) {
            let increment = i * 2;
            ellipse(x, y, diameter + increment, diameter + increment);
        }
    }

    updateRotation(angleIncrement) {
        this.rotationAngle += angleIncrement;
    }
}
