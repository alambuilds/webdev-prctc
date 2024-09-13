// method overriding

class a {
    show() {
        return 'A';
    }
}

class b extends a {
    show() {
        return 'B';
    }
}

var c = new b();

console.log(c.show());