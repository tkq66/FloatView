class Entity {
  constructor(p, x, y, infoW, infoH, data, w=20, h=20) {
    this.p = p;
    this.data = data;
    this.absW = x;
    this.absH = y;
    this.w = w;
    this.h = h;
    this.wRadius = this.w / 2;
    this.hRadius = this.h / 2;
    this.infoW = infoW;
    this.infoH = infoH;
    this.wCorner = (x - infoW) - this.wRadius;
    this.hCorner = y - this.hRadius;
    xOffset = (x - infoW) * this.p.random(0, 1);
    yOffset = y * this.p.random(0, 1);
    this.x = (xOffset < this.wRadius) ? this.wRadius : ((xOffset > this.wCorner) ? this.wCorner : xOffset);
    this.y = this.hRadius if yOffset < this.hRadius else this.hCorner if yOffset > this.hCorner else yOffset
  }

  display() {
    this.p.noStroke();
    this.p.fill(255, 0, 0, 0);
    this.p.ellipse(self.x, self.y, self.w, self.h);
    this.p.fill(255);
    this.p.ellipse(self.x, self.y, self.wRadius, self.hRadius);
    this.p.fill(200);
    this.p.rect(self.absW - self.infoW, 0, self.infoW, self.infoH);
  }

  watchEvents(mouseX, mouseY) {
    if (this.isMouseHit(mouseX, mouseY)) {
      this.onMouseHit();
      return true;
    }
    else {
      this.noEvent();
      return false;
    }
  }

  noEvent() {
    this.display();
  }

  onMouseHit() {
    this.p.noStroke();
    this.p.fill(255, 0, 0, 0);
    this.p.ellipse(this.x, this.y, this.w, this.h);
    this.p.fill(240,128,128);
    this.p.ellipse(this.x, this.y, this.wRadius, this.hRadius);
  }

  isMouseHit(mouseX, mouseY) {
    return this.p.sq(mouseX - this.x)/(this.wRadius*this.wRadius) + sq(mouseY - this.y)/(this.hRadius*this.hRadius) < 1;
  }
}

export default Entity;
