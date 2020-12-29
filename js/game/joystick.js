 class Rect {
     constructor(x, y, w, h, color) {
         this.x = x;
         this.y = y;
         this.width = w;
         this.height = h;
         this.size = w;
         this.initialX = x;
         this.initialY = y;
         this.color = color;
     }

     release() {
         this.x = this.initialX;
         this.y = this.initialY;
     }

     centerX() {
         return this.x + (this.width / 2);
     }

     centerY() {
         return this.y + (this.height / 2);
     }
 }

 class SimpleButton {
     constructor(ctx, x, y, size, color, triggerColor) {
         this.ctx = ctx;

         this.isTriggered = false;

         this.size = size;
         this.x = x;
         this.y = y;

         this.color = color
         this.triggerColor = triggerColor
     }

     trigger(event) {
         let x = event.touches[0].clientX
         let y = event.touches[0].clientY

         if (intersect({ x: x, y: y, size: 1 }, this)) {
             this.isTriggered = !this.isTriggered
         }
     }

     draw() {
         this.ctx.fillStyle = this.isTriggered ? this.triggerColor : this.color
         this.ctx.fillRect(this.x, this.y, this.size, this.size)
     }
 }

 class MovementButton {
     constructor(ctx, player, x, y, area, rectColor, rectButtonColor) {
         this.ctx = ctx;
         this.player = player;

         this.buttonMoving = false;
         this.position = { x: 0, y: 0 };
         this.positionLastClickMove = { x: 0, y: 0 };
         this.keepMovingX = true;
         this.keepMovingY = true;
         this.positionInitX = 0;
         this.positionInitY = 0;
         this.rectButtonInRigth = false
         this.rectButtonInLeft = false
         this.rectButtonInTop = false
         this.rectButtonInBottom = false;

         this.area = area;
         this.left = x;
         this.top = y;

         this.areaButton = this.area / 4;
         this.leftButton = (this.left + (this.area / 2)) - (this.areaButton / 2);
         this.topButton = (this.top + (this.area / 2)) - (this.areaButton / 2);

         this.positionInitX = (this.left + (this.area / 2));
         this.positionInitY = (this.top + (this.area / 2));
         this.position = { x: this.positionInitX, y: this.positionInitY }
         this.positionLastClickMove = { x: this.positionInitX, y: this.positionInitY }

         this.rect = new Rect(this.left, this.top, this.area, this.area, rectColor);
         this.rectButton = new Rect(this.leftButton, this.topButton, this.areaButton, this.areaButton, rectButtonColor);
     }

     update(force) {
         if (this.isTriggered || force) {
             this.rectButton.x = this.position.x - this.rectButton.width / 2;
             this.rectButton.y = this.position.y - this.rectButton.height / 2;
             this.movePlayerDirections();
         }
     }

     updateToShot(force) {
         if (this.isTriggered || force) {
             this.rectButton.x = this.position.x - this.rectButton.width / 2;
             this.rectButton.y = this.position.y - this.rectButton.height / 2;
         }
     }

     draw() {
         this.ctx.fillStyle = this.rect.color;
         this.ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)

         this.ctx.fillStyle = this.rectButton.color;
         this.ctx.fillRect(this.rectButton.x, this.rectButton.y, this.rectButton.width, this.rectButton.height)
     }

     setPosition(x, y) {
         this.buttonMoving = true;

         let destiny_x = x
         let destiny_y = y

         if (destiny_x > this.rect.right) {
             destiny_x = this.rect.right;
         } else if (destiny_x < this.rect.left) {
             destiny_x = this.rect.left;
         }

         if (destiny_y > this.rect.bottom) {
             destiny_y = this.rect.bottom;
         } else if (destiny_y < this.rect.top) {
             destiny_y = this.rect.top;
         }

         if (destiny_x > this.positionInitX) {
             this.setToDirectionX(true, false);
         } else if (destiny_x < this.positionInitX) {
             this.setToDirectionX(false, true);
         } else {
             this.setToDirectionX(false, false);
         }

         if (destiny_y > this.positionInitY) {
             this.setToDirectionY(false, true);
         } else if (destiny_y < this.positionInitY) {
             this.setToDirectionY(true, false);
         } else {
             this.setToDirectionY(false, false);
         }

         if (destiny_x > this.rect.x + this.rect.width)
             destiny_x = this.rect.x + this.rect.width

         if (destiny_x < this.rect.x)
             destiny_x = this.rect.x

         if (destiny_y > this.rect.y + this.rect.height)
             destiny_y = this.rect.y + this.rect.height

         if (destiny_y < this.rect.y)
             destiny_y = this.rect.y

         this.position = { x: destiny_x, y: destiny_y }
     }

     movePlayerDirections() {
         if (this.rectButtonInRigth)
             this.player.toRight();
         else if (this.rectButtonInLeft)
             this.player.toLeft();

         if (this.rectButtonInTop)
             this.player.toTop();
         else if (this.rectButtonInBottom)
             this.player.toBottom();
     }

     release() {
         this.position.x = this.positionInitX
         this.position.y = this.positionInitY
         this.isTriggered = false
     }

     setToDirectionX(rigth, left) {
         this.rectButtonInRigth = rigth;
         this.rectButtonInLeft = left;
     }

     setToDirectionY(top, bottom) {
         this.rectButtonInTop = top;
         this.rectButtonInBottom = bottom;
     }

     trigger(event) {
         let x = event.touches[0].clientX
         let y = event.touches[0].clientY

         this.isTriggered = intersect({ x: x, y: y, size: 1 }, this.rect)
     }
 }