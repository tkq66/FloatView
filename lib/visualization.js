import Entity from "entity.js";

class Visualization {
  constructor(parentWidth, parentHeight) {
    this.parentWidth = parentWidth;
    this.parentHeight = parentHeight;
  }

  sketch(p) {
    p.setup = setup;
    p.draw = draw;

    let self = this;
    function setup() {
      p.createCanvas(self.parentWidth, self.parentHeight);
      p.background("red");
      p.line(0, 0, p.width, p.height);
    }

    function draw() {
      p.background("red");
      p.line(0, 0, p.width, p.height);
    }
  }
}

export default Visualization;
