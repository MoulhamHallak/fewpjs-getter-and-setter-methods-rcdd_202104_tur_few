// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return Math.PI * this.radius * 2;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }
  
<<<<<<< HEAD
  set diameter(newDiameter) {
     this.radius = newDiameter / 2;
  } 

  set circumference(newCircumference) {
     this.radius = newCircumference / (2 * Math.PI);
  } 

  set area(newArea) {
     this.radius = Math.sqrt (newArea / Math.PI);
=======
  set diameter() {
     this.radius = this.diameter / 2;
  } 

  set circumference() {
     this.radius = this.circumference / (2 * Math.PI);
  } 

  set area() {
     this.radius = Math.sqrt (this.area / Math.PI);
>>>>>>> 45420d62165b286d0df6b2b11df522fa6b182592
  }   
}
 