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

     trigger(touche) {
         let x = touche.clientX
         let y = touche.clientY

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
     constructor(ctx, player, x, y, area, smallButtonArea, rectColor, rectButtonColor) {
         this.ctx = ctx;
         this.player = player;

         this.buttonMoving = false;
         this.position = { x: 0, y: 0 };
         this.positionLastClickMove = { x: 0, y: 0 };
         this.positionInitX = 0;
         this.positionInitY = 0;

         this.area = area;
         this.left = x;
         this.top = y;

         this.areaButton = smallButtonArea;
         this.leftButton = (this.left + (this.area / 2)) - (this.areaButton / 2);
         this.topButton = (this.top + (this.area / 2)) - (this.areaButton / 2);

         this.positionInitX = (this.left + (this.area / 2));
         this.positionInitY = (this.top + (this.area / 2));
         this.position = { x: this.positionInitX, y: this.positionInitY }
         this.positionLastClickMove = { x: this.positionInitX, y: this.positionInitY }

         this.rect = new Rect(this.left, this.top, this.area, this.area, rectColor);
         this.rectButton = new Rect(this.leftButton, this.topButton, this.areaButton, this.areaButton, rectButtonColor);
         let dArea = (area / 3)
         this.rectDeadZone = new Rect(this.left + dArea, this.top + dArea, dArea, dArea);

         this.angle = 0;
     }

     update(force) {
         if (this.isTriggered || force) {
             this.rectButton.x = this.position.x - this.rectButton.width / 2;
             this.rectButton.y = this.position.y - this.rectButton.height / 2;
             //  if (!intersect({ x: this.position.x, y: this.position.y, size: 1 }, this.rectDeadZone))
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

         //  this.ctx.fillStyle = "red";
         //  this.ctx.fillRect(this.rectDeadZone.x, this.rectDeadZone.y, this.rectDeadZone.width, this.rectDeadZone.height)
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

         if (destiny_x > this.rect.x + this.rect.width)
             destiny_x = this.rect.x + this.rect.width

         if (destiny_x < this.rect.x)
             destiny_x = this.rect.x

         if (destiny_y > this.rect.y + this.rect.height)
             destiny_y = this.rect.y + this.rect.height

         if (destiny_y < this.rect.y)
             destiny_y = this.rect.y

         this.position = { x: destiny_x, y: destiny_y }

         const dx = x - this.rectButton.centerX()
         const dy = y - this.rectButton.centerY()

         this.angle = Math.atan2(dy, dx) * (180 / Math.PI);
     }

     movePlayerDirections() {
         this.player.moveJoystick(this.angle)
     }

     release() {
         this.position.x = this.positionInitX
         this.position.y = this.positionInitY
         this.isTriggered = false
     }

     trigger(touche) {
         let x = touche.clientX
         let y = touche.clientY

         this.isTriggered = intersect({ x: x, y: y, size: 1 }, this.rect)
         if (this.isTriggered) {

             this.touche = touche;
         }
     }

     canHandlingTouchEvent(touche) {
         if (!this.touche) return false;

         return this.touche.identifier == touche.identifier;
     }
 }