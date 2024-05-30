class DiamondFormation{
    constructor(centerX, centerY, outerRadius, diamondSize, count) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.outerRadius = outerRadius;
        this.diamondSize = diamondSize;
        this.count = count;
       // this.glowColors = glowColors;
        this.diamonds = [];
        this.createDiamonds();
    }

    createDiamonds() {
        let angleStep = TWO_PI / this.count;
        for (let i = 0; i < this.count; i++) {
            let x = this.centerX + this.outerRadius * cos(angleStep * i);
            let y = this.centerY + this.outerRadius * sin(angleStep * i);
            this.diamonds.push(new Diamond(x, y, this.diamondSize, 'white'));
        }
    }

    display() {
        this.diamonds.forEach(diamond => {
            diamond.display();
        });
    }
}