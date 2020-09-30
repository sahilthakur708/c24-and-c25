const Engine = Matter.Engine ;
 const World = Matter.World ;
  const Bodies = Matter.Bodies ; 
  var engine , world ,ground ;
  var log1,log2,log3;
 
   function setup() {
     createCanvas(800,400);

      engine = Engine.create();
      world = engine.world ;
      Ball1=new Ball(50,370,20)
      
var options={isStatic: true} 
ground=Bodies.rectangle(400,400,1000,10,options)
log1=Bodies.rectangle(485,290,10,100)
log2=Bodies.rectangle(400,390,100,10)
log3=Bodies.rectangle(320,290,10,100)
World.add(world,ground);
World.add(world,log1);
World.add(world,log2);
World.add(world,log3);

    
     
   
    } 

      function draw() {
        background(0);
        Engine.update(engine)
        rectMode(CENTER)
      Ball1.display()
     
       
fill("red")
       rect(ground.position.x,ground.position.y,1000,10)
       push()
       fill("red")
       rect(log1.position.x,log1.position.y,10,100)
       pop()
fill("red")
       rect(log2.position.x,log2.position.y,160,10)
       push()
       fill("red")
       rect(log3.position.x,log3.position.y,10,100)
       pop()
       keyPressed()
}
function keyPressed(UP_ARROW){
       if(keyCode === UP_ARROW){

}  

}   