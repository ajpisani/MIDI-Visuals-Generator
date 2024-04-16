// initialize and set value of mp which we will use to tell us when
//the mouse is pressed which will be useful later

let mp = false;

// declare some arrays, poo is for particles, keys is to keep
//track of how many keys (later midi notes) the user has pressed

let poo = [];
let keys = [];

// setup function, runs once, used to set up a canvas

function setup() {
  createCanvas(window.innerWidth / 2, window.innerHeight / 2, WEBGL);
  frameRate(50);
  colorMode(HSB);
  background(0, 0, 0);
}

// function to resize canvas

function windowResized() {
  resizeCanvas(window.innerWidth / 2, window.innerHeight / 2, WEBGL);
}

class numOfKeys {
  constructor() {
    // placeholder idk if i actually need it but it is here

    this.something = "nothing";
  }
}

// particle class... very complicated

class Particles {
  constructor() {
    //x position (i want it to start in the center)

    this.x = random(
      -(window.innerWidth / 20) * keys.length,
      (window.innerWidth / 20) * keys.length
    );

    //y position (i want this to start in the center too)

    this.y = random(
      -(window.innerHeight / 20) * keys.length,
      (window.innerHeight / 20) * keys.length
    );

    //x and y speed

    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-4, -6);

    //alpha is like opacity. its values are between 0 and 1

    this.alpha = 1;

    // life span is for a couple of different things, its most important function is acting like a timer for each particle

    this.lifespan = 255;

    // this is the velocity. the particle will add the velocity to its postionSpeed (x or y)
    //and this value will be updated and

    this.velocity = random(1);
    this.hue = random(1, 300);
    this.sat = 255;
    this.r = 7;
  }

  //this function returns true when the lifespan reaches zero so the particle can be deleted

  death() {
    return this.lifespan < 0;
  }

  // this function is actually draws a circle

  showParticles() {
    noStroke();
    fill(this.hue, this.sat, this.lifespan, this.alpha);
    circle(this.x, this.y, this.r * keys.length);
  }

  // this function moves the circles

  updateParticles() {
    this.x -= this.xSpeed;
    this.y -= this.ySpeed + this.velocity;
    this.alpha -= 0.025;
    this.lifespan -= 1;
    this.sat -= 10;
    this.r += 0.5;
  }

  // this function updates the velocity making it act as an acceleration function

  updateVelocity() {
    this.velocity -= 0.2;
  }
}

// this function adds particles to the particle array (which i called poo)

runParticles = function () {
  pee = new Particles();
  poo.push(pee);
};

// this is the draw function, it is always looping

function draw() {
  // backhground always looping means the shapes wont leave a trail as they move

  background(0, 0, 0);

  // this is saying when mp is true, run the function  that adds particles to the poo array

  if (mp == true) {
    runParticles();
  }

  // uuuuuuuh okay so its a for loop that loops as long as the particle array is....
  // and it... has the SomeArray.runSomeFunctionsInThatArray so that is about as much as i know about that

  for (i = 0; i < poo.length; i++) {
    poo[i].updateVelocity();
    poo[i].updateParticles();
    poo[i].showParticles();

    // this if function thing is to remove particles once they have returned the true value from the death function :0

    if (poo[i].death()) {
      poo.splice(i, 1);
    }
  }
}

// this function is for when a key is pressed. it makes mp = true and adds a "key" to the number of keys array
// it also wont let you hit more than 4 keys (for now) so the website doesnt explode

function keyPressed() {
  mp = true;
  let k = new numOfKeys();
  if (keys.length <= 4) {
    keys.push(k);
  }
}

// this function removes the keys from the array from the beginning which... should be fine
// it also makes mp = false
// mp is labled mp because this key pressed function was origninally for a mouse pressed function where the
// particles followed the mouse when you clicked... i changed it to random spots when keys are pressed as that is closer
// to playing keys  on a midi controller which is what i want to do and want to do soon

function keyReleased() {
  setTimeout((mp = false), 300);
  keys.splice(0, 1);
}
