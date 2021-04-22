class Polygon {
    constructor(arrayOfSideLengths) {
        this.arrayOfSideLengths = arrayOfSideLengths
    }
    get countSides() {
        return this.arrayOfSideLengths.length
    }

    get perimeter() {
        return this.arrayOfSideLengths.reduce((total, item) => {
            return total + item
        })
    }
}

class Triangle extends Polygon {
    // constructor(arrayOfSideLengths) {
    //     super(arrayOfSideLengths)
    // }

    get isValid() {
        if (this.countSides === 3) {
            return (
                this.arrayOfSideLengths[0] + this.arrayOfSideLengths[1] > this.arrayOfSideLengths[2] && 
                this.arrayOfSideLengths[1] + this.arrayOfSideLengths[2] > this.arrayOfSideLengths[0] && 
                this.arrayOfSideLengths[0] + this.arrayOfSideLengths[2] > this.arrayOfSideLengths[1])
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    // constructor(arrayOfSideLengths) {
    //     super(arrayOfSideLengths)
    // }

    get isValid() {
        if (this.countSides === 4) {
            return (this.arrayOfSideLengths[0] === this.arrayOfSideLengths[1] && this.arrayOfSideLengths[0] === this.arrayOfSideLengths[2] && this.arrayOfSideLengths[0] === this.arrayOfSideLengths[3])
        } else {
            return false
        }
    }

    get area() {
        return this.arrayOfSideLengths[0] ** 2
    }
}