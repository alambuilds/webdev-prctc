class abc {
  
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    area() {
      return this.height * this.width;
    }

    sum () {
      return this.height + this.width ;
    }
  }
  
  const a = new abc(10, 10);
  
  console.log(a.area());

  const b = new abc(10, 5);

  console.log(b.area());
  console.log(b.sum());
