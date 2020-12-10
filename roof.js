class Roof{
    constructor(x,y,width,height){
        var options = {
            density:1,
            restitution:0.8,
            friction:1,
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display(){
        var pos=this.body.position;

        fill("black");
        stroke("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}