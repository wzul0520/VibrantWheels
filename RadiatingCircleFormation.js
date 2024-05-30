class RadiatingCircleFormation {
    constructor(centerX, centerY, outerRadius, numObjects, lineLength, numLines, glowColor, strokeWeight = 1) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.outerRadius = outerRadius;
        this.numObjects = numObjects;
        this.lineLength = lineLength;
        this.numLines = numLines;
        this.glowColor = glowColor;  // Pass glow color to the formation
        this.radiatingObjects = [];
        this.strokeWeight = strokeWeight;

        this.createRadiatingObjects();
    }

    createRadiatingObjects() {
        let angleStep = TWO_PI / this.numObjects;
        for (let i = 0; i < this.numObjects; i++) {
            let x = this.centerX + this.outerRadius * cos(angleStep * i);
            let y = this.centerY + this.outerRadius * sin(angleStep * i);
            let angle = angleStep * i;
            // Pass the same glow color to each object
            this.radiatingObjects.push(new RadiatingLines(x, y, this.lineLength, this.numLines, this.glowColor, this.strokeWeight, angle));
        }
    } 

    display() {
        this.radiatingObjects.forEach(obj => {
            for (let i = 0; i < 5; i++) {  // Corrected loop syntax
                obj.display();
            }
        });
    }
    
}