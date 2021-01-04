 class Buttom {
     constructor(x, y, w, h, color) {
         this.x = x;
         this.y = y;
         this.size = w;
         this.r = w;
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
         this.position = { x: x, y: y };
         this.positionInitX = x;
         this.positionInitY = y;

         this.area = area;
         this.zoneButton = new Buttom(x, y, this.area, this.area, rectColor);
         this.smallButton = new Buttom(x, y, smallButtonArea, smallButtonArea, rectButtonColor);

         this.angle = 0;
     }

     update(force) {
         if (this.isTriggered || force) {
             this.smallButton.x = this.position.x;
             this.smallButton.y = this.position.y;
             this.movePlayerDirections();
         }
     }

     updateToShot(force) {
         if (this.isTriggered || force) {
             this.smallButton.x = this.position.x
             this.smallButton.y = this.position.y
         }
     }

     draw() {

         //  this.ctx.fillStyle = "red";
         //  this.ctx.fillRect(this.zoneButton.x, this.zoneButton.y, this.zoneButton.width, this.zoneButton.height)

         this.ctx.fillStyle = this.zoneButton.color;
         this.ctx.beginPath();
         this.ctx.arc(this.zoneButton.x, this.zoneButton.y, this.zoneButton.size, 0, 2 * Math.PI);
         this.ctx.fill()
         this.ctx.stroke();

         //  this.ctx.fillStyle = "blue";
         //  this.ctx.fillRect(this.smallButton.x, this.smallButton.y, this.smallButton.width, this.smallButton.height)

         this.ctx.fillStyle = this.smallButton.color;
         this.ctx.beginPath();
         this.ctx.arc(this.smallButton.x, this.smallButton.y, this.smallButton.size, 0, 2 * Math.PI);
         this.ctx.fill()
         this.ctx.stroke();

         //  this.ctx.fillStyle = "green";
         //  this.ctx.beginPath();
         //  this.ctx.arc(this.smallButton.initialX, this.smallButton.initialY, 5, 0, 2 * Math.PI);
         //  this.ctx.fill()
         //  this.ctx.stroke();
     }

     setPosition(x, y) {
         this.buttonMoving = true;

         const xDiff = x - this.zoneButton.initialX;
         const yDiff = y - this.zoneButton.initialY;
         this.angle = Math.atan2(yDiff, xDiff);

         x = this.area * Math.cos(this.angle) + this.zoneButton.initialX;
         y = this.area * Math.sin(this.angle) + this.zoneButton.initialY;

         this.position = { x: x, y: y };
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

         this.isTriggered = circlesIntersect({ x: x, y: y, r: 1 }, this.zoneButton)
         if (this.isTriggered) {
             this.touche = touche;
         }
     }

     canHandlingTouchEvent(touche) {
         if (!this.touche) return false;

         return this.touche.identifier == touche.identifier;
     }
 }