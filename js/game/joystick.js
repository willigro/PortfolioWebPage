 class Rect {
     constructor(x, y, w, h) {
         this.x = x;
         this.y = y;
         this.width = w;
         this.height = h;
         this.size = w;
     }
 }

 class MovementButton {
     constructor(ctx, player) {
         this.ctx = ctx;
         this.player;

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

         this.area = 200;
         this.left = 50;
         this.top = 350;


         this.areaButton = this.area / 4;
         this.leftButton = (this.left + (this.area / 2)) - (this.areaButton / 2);
         this.topButton = (this.top + (this.area / 2)) - (this.areaButton / 2);

         this.positionInitX = (this.left + (this.area / 2));
         this.positionInitY = (this.top + (this.area / 2));
         this.position = { x: this.positionInitX, y: this.positionInitY }
         this.positionLastClickMove = { x: this.positionInitX, y: this.positionInitY }

         this.rect = new Rect(this.left, this.top, this.area, this.area);
         this.rectButton = new Rect(this.leftButton, this.topButton, this.areaButton, this.areaButton);
         console.log(this.rect, this.rectButton)
     }

     update() {
         this.rectButton.x = this.position.x - this.rectButton.width / 2;
         this.rectButton.y = this.position.y - this.rectButton.height / 2;

         if (this.buttonMoving)
             this.moveplayer();

     }

     moveplayer() {
         let largura = 0;
         let altura = 0;

         largura = this.position.x - this.positionInitX;
         if (largura < 0)
             largura *= -1;

         altura = this.position.y - this.positionInitY;
         if (altura < 0)
             altura *= -1;

         let comprimento = Math.sqrt(Math.pow(altura, 2.0) + Math.pow(largura, 2.0));
         if (comprimento != 0) {
             let seno = altura / comprimento;
             let cosseno = largura / comprimento;
             let mX = this.rectButtonInLeft ? -1 : this.rectButtonInRigth ? 1 : 0;
             let mY = this.rectButtonInTop ? -1 : this.rectButtonInBottom ? 1 : 0;
             //  player.moveX(cosseno, mX);
             //  player.moveY(seno, mY);
         }
     }

     draw() {
         this.ctx.fillStyle = "red";
         this.ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)

         this.ctx.fillStyle = "blue";
         this.ctx.fillRect(this.rectButton.x, this.rectButton.y, this.rectButton.width, this.rectButton.height)
     }

     setButtonMoving(move) {
         this.buttonMoving = move;
         if (!buttonMoving)
             this.position = { x: positionInitX, y: positionInitY }
     }

     moveButtonTest(x, y) {
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
         }

         if (destiny_y > this.positionInitY) {
             this.setToDirectionY(false, true);
         } else if (destiny_y < this.positionInitY) {
             this.setToDirectionY(true, false);
         }

         this.position = { x: destiny_x, y: destiny_y }
         console.log(this.position)
     }

     setToDirectionX(rigth, left) {
         //  rectButtonInRigth = rigth;
         //  rectButtonInLeft = left;
         //  player.setSideX(rigth, left);
         console.log(rigth, left)
     }

     setToDirectionY(top, bottom) {
         //  rectButtonInTop = top;
         //  rectButtonInBottom = bottom;
         //  player.setSideY(top, bottom);
         console.log(top, bottom)
     }
 }