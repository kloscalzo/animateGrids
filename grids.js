//Katharine LoScalzo
//animated grids overlap
//30 October 2016

var gridOne;
var gridTwo;
var gridThree;

function setup() {
    background(255, 255, 0);
    createCanvas(600, 600);

    gridOne = new Grids(10, 10, 30, 20, 190, 10, 70, 2, 1);
    gridTwo = new Grids(300, 230, 20, 25, 0, 255, 0, 0, 0);
    gridThree = new Grids(400, 400, 30, 50, 20, 0, 255, 4, 2);
}

function draw() {
    background(255, 255, 0);
    gridOne.animate();
    gridOne.display();
    gridTwo.animate();
    gridTwo.show();
    gridThree.animate();
    gridThree.show();
}

function Grids(xPos, yPos, radius, padding, r, g, b, xVel, yVel) {
    this.x = xPos;
    this.y = yPos;
    this.size = radius;
    this.p = padding;
    this.ree = r;
    this.gee = g;
    this.bee = b;
    this.xvelocity = xVel;
    this.yvelocity = yVel;

    this.animate = function () {
        //call animation / motion logic
        this.x += this.xvelocity;
        this.y += this.yvelocity;

        if (this.x >= width || this.x <= 0) {
            this.xvelocity = -this.xvelocity;
        }
        if (this.y >= height || this.y <= 0) {
            this.yvelocity = -this.yvelocity;
        }
    }

    this.display = function () {
        //call geometry logic

        for (var j = 0; j < 10; j++) {
            for (var i = 0; i < 10; i++) {

                fill(this.ree + (j * 25), this.gee + (i * 15), this.bee + (j * 15)); //color

                rect(this.x + (i * this.p), this.y + (j * this.p), this.size, this.size); //grid
            }
        }
    }

    this.show = function () {
        for (var j = 0; j < 10; j++) {
            for (var i = 0; i < 10; i++) {

                fill(this.ree + (j * 25), this.gee + (i * 15), this.bee + (j * 15)); //color

                ellipse(this.x + (i * this.p), this.y + (j * this.p), this.size, this.size); //grid
            }
        }
    }
};
