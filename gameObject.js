AFRAME.registerComponent("boxes", {
  schema: {
    width: { type: "number", default: 3 },
    height: { type: "number", default: 3 },
    depth: { type: "number", default: 3 },
  },

  init: function () {
    this.createBox();
  },

  createBox: function () {
    for (var i = 0; i < 10; i++) {
      var box = document.createElement("a-entity");
      box.setAttribute("id", `box${i}`);
      xPos = Math.random() * 200 - 100;
      yPos = 1.5;
      zPos = Math.random() * 200 - 100;
      var position = { x: xPos, y: yPos, z: zPos };
      box.setAttribute("position", position);
      box.setAttribute("geometry", {
        primitive: "box",
        width: this.data.width,
        height: this.data.height,
        depth: this.data.depth,
      });
      box.setAttribute("material", {
        src: "./boxtexture1.jpg",
        repeat: "1 1 1",
      });
      box.setAttribute("static-body", {});

      var parent = document.querySelector("#scene");
      parent.appendChild(box);
    }
  },
});
