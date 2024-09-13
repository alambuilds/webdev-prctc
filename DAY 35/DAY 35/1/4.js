// Inheritance

class a {
    constructor (aV) {
        this.aV = aV;
    }
    aShow() {
        return this.aV+1;
    }
}

class b extends a {
    constructor (x) {
        super(x);
        this.bV = 6;
    }
    bShow() {
        return this.bV + this.aV;
    }
}

var x = new b(5);

console.log(x.aV);          // 5
console.log(x.bV);          // 6
console.log(x.aShow());     // 6
console.log(x.bShow());     // 11