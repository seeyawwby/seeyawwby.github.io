$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-20, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -80, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid

    // TODO 2 - Create Platforms
    createPlatform(0, 560, 800, 20, "navy");
    createPlatform(1100, 690, 80, 200, "navy");
    createPlatform(490, 580, 20, 20, "green");
    createPlatform(680, 400, 150, 20, "green");
    createPlatform(300, 500, 100, 20, "green");
    createPlatform(660, 420, 20, 20, "green");
    createPlatform(1280, 150, 20, 400, "lightblue");
    createPlatform(1010, 560, 0.3, 20, "lightblue");
    createPlatform(900, 560, 1, 20, "lightblue");
    createPlatform(1200, 560, 20, 20, "lightblue");
    createPlatform(1260, 460, 20, 20, "lightblue");
    createPlatform(1200, 360, 20, 20, "lightblue");

    // TODO 3 - Create Collectables
    createCollectable("rok", 972, 40, 0.5, 0.7);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("diamond", 1300, 170, 0.5, 0.7);

    // TODO 4 - Create Cannons
    createCannon("left", 670, 100, 70, 0, 70);
    createCannon("bottom", 780, 900, 100, 10);
    createCannon("bottom", 780, 800, 100, 10);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
