AFRAME.registerComponent("target-coin", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + (-50));      
        var posY = (Math.random() * 20 + (25));
        var posZ = (Math.random() * 60 + (-40));
        
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("rotation",{x:0,y:90,z:90})

      coinEl.setAttribute("material","color","#ff9100");
      
      coinEl.setAttribute("geometry",{ primitive: "cylinder",radius: 0.7,  height:0.01 });
      
      coinEl.setAttribute("animation",{
        porpery:"rotation",
        to:"0 360 0",
        loop:true,
        dur:1000
      });

      birdEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:0.7
      })
      
      birdEl.setAttribute("game-play",{
        elementId: `#${id}`,
      })
  
      terrainEl.appendChild(coinEl);
    }
  });