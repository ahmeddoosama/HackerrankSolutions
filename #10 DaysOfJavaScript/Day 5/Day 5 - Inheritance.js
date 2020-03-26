Rectangle.prototype.area = function() {
    return this.w * this.h;
}

class Square extends Rectangle {
    constructor(w) {
        super(w) //Here, it calls the parent class's constructor
        this.h = w;
        this.w = w;
    }
}
