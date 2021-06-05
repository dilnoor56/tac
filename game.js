class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }
  // static getPlayer1()
  // {

  //   var tool1=database.ref('players/player1/tool');

  //    tool1.on("value",function(data){
  //     tooldetails = data.val();
  //   })
  //  // console.log(tool)

    
  // }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
   

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
   // Game.getPlayer1();
    background("skyblue")
    if(allPlayers !== undefined){
      console.log(allPlayers.player1.tool)
      console.log(allPlayers.player1.tool)
     
     var index=0
     var tool_image
     this.o=createButton("O")
     this.x=createButton("X")
      
      //420 416
      tile_1=createSprite(450,180,120,150)
      tile_1.shapeColor="black"
      tile_2=createSprite(450,330,120,150)
      tile_2.shapeColor="black"
      tile_3=createSprite(450,430,120,120)
      tile_3.shapeColor=0
      tile_4=createSprite(600,180,180,150)
      tile_4.shapeColor=0
      tile_5=createSprite(600,330,180,150)
      tile_5.shapeColor=0
      tile_6=createSprite(600,450,180,80)
      tile_6.shapeColor=0
      tile_7=createSprite(750,190,80,150)
      tile_7.shapeColor=0
      tile_8=createSprite(750,320,80,150)
      tile_8.shapeColor=0
      tile_9=createSprite(750,450,80,80)
      tile_9.shapeColor=0
     
      b1=createSprite(500,300,10,400)
      b1.shapeColor="orange"
      b2=createSprite(700,300,10,400)
      b2.shapeColor="orange"
      b3=createSprite(600,250,400,10)
      b3.shapeColor="orange"
      b4=createSprite(600,400,400,10)
      b4.shapeColor="orange"
      if(allPlayers.player1.tool=="o"){
        tool_image=loadAnimation("spider.png")
      }else{
        tool_image=loadAnimation("skeleton.png")
      }
      img=createSprite(100,135)
      img.addAnimation("f",tool_image)
      if(mousePressedOver(tile_1)){
        /*img.x=450
        img.y=180*/
        img=createSprite(450,180)  
        img.changeAnimation("f")
        console.log("hello" ,tile_1)
        console.log(img.x)
      }
   // var x=0
  //  var y
      for(var plr in allPlayers){
           
    //     index=index+1
       //  x=x+200
       //  y=displayHeight=allPlayers[plr].distance
       
         if(plr==="player"+player.index){
           fill("black")
           textSize(40)
           text("Welcome    "+allPlayers[plr].name,400,80)
           this.o.position(200,200)
           this.x.position(300,200)
           this.o.mousePressed(()=>{
            player.updateTool("o")
          })
          this.x.mousePressed(()=>{
            player.updateTool("x")
          })
          //  if(player1.tool===player2.tool){
          //    fill("black")
          //    textSize(40)
          //    text("Please select different tool!!",100,200)
          //    console.log("Please select different tool!!")
          //  }
          // text("You get "+allPlayers[plr].tool+allPlayers[plr].name,400,500)
          // camera.position.x=displayWidth/2;
         // camera.position.y=cars[index-1].y

         if(allPlayers.player1.tool!='' && allPlayers.player2.tool!='')
         {
         if(allPlayers.player1.tool==allPlayers.player2.tool)
         {
 
               text("Both Players value cannot be same",200,200)
 

         }
         
       }
        
         }
        
    }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.score +=1
      player.update();
    }
    drawSprites()
  }
}