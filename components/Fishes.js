AFRAME.registerComponent("fishes",{
    init: function () {
        for (var i = 1; i <= 10; i++) {
          //id
          var id = `fish${i}`;
    
          //position variables     
          var posX =(Math.random() * 100 + (-50));      
          var posY = (Math.random() * 20 + (25));
          var posZ = (Math.random() * 60 + (-40));
    
          var position = { x: posX, y: posY, z: posZ };

          var rotX =(Math.random() * 20 + (-20));      
          var rotY = (Math.random() * 180 + (90));
          var rotZ = (Math.random() * 20 + (-20));

          var rotation = { x: rotX, y: rotY, z: rotZ };
    
          //call the function
          this.createFishs(id, position, rotation);
        }
      } ,
    
      createFishs: function(id, position, rotation) { 
        
        var terrainEl = document.querySelector("#terrain");
    
        var fishEl = document.createElement("a-entity");
    
        fishEl.setAttribute("id",id);
        fishEl.setAttribute("position",position);
        fishEl.setAttribute("rotation",rotation)
        
        fishEl.setAttribute("gltf-model","./models/gold_fish/scene.gltf");
         
        fishEl.setAttribute("scale",{x:5,y:5,z:5});
        
        birdEl.setAttribute("static-body",{
          shape:"sphere",
          sphereRadius:5
        })
        
        birdEl.setAttribute("game-play",{
          elementId: `#${id}`,
        })
    
        terrainEl.appendChild(fishEl);
      }
})