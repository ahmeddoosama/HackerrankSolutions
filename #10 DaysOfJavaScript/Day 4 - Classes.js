class Polygon {
    
    constructor(sides) {
        this.sides = sides;
    }
    
    perimeter() {
        let perimeter = 0;
        for (let i = 0; i < this.sides.length; i++) {
            perimeter += this.sides[i]
        }
        return perimeter;
    }

}