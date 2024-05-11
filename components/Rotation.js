AFRAME.registerComponent("terrain-position-reader", {
    schema: {
      speedOfposition: { type: "number", default: 0 } 
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfposition < 0.1) {
            this.data.speedOfposition += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfposition > -0.1) {
            this.data.speedOfposition -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapposition = this.el.getAttribute("position");
  
      mapposition.y += this.data.speedOfposition;
  
      this.el.setAttribute("position", {
        x: mapposition.x,
        y: mapposition.y,
        z: mapposition.z
      });
    }
  });
AFRAME.registerComponent("diver-position-reader", {
    schema: {
      speedOfposition: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfposition = this.el.getAttribute("position"); 
  
        var planeposition = this.data.speedOfposition;  
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          
            planeposition.x += 0.05;
            this.el.setAttribute("position", planeposition);
          
        }
        if (e.key === "ArrowLeft") {
          
            planeposition.x -= 0.05;
            this.el.setAttribute("position", planeposition);
          
        }
        
      });
    }
  });  