const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var bg  = "sunrise1.png" ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
        background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here
    


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    //change the data in JSON format

    // write code slice the datetime
    if(hour>=0600 && hour<=0800){
        bg = "sunrise1.png";
        text("7am", 100, 100);
    }
    else if (hour>=0801 && hour<=1000) {
        bg = "sunrise2.jpg";
        text("9am", 100, 100);
    }
    else if (hour>=1001 && hour<=1200) {
        bg = "sunrise3.jpg";
        text("11am", 100, 100);
    }
    else if (hour>=1201 && hour<=1400) {
        bg = "sunrise4.jpg";
        text("1pm", 100, 100);
    }
    else if (hour>=1401 && hour<=1600) {
        bg = "sunrise5.jpg";
        text("3pm", 100, 100);
    }
    else if (hour>=1601 && hour<=1800) {
        bg = "sunrise6.jpg";
        text("5pm", 100, 100);
    }
    else if (hour>=1801 && hour<=2000) {
        bg = "sunset7.jpg";
        text("7pm", 100, 100);
    }
    else if (hour>=2001 && hour<=2200) {
        bg = "sunset8.jpg";
        text("9pm", 100, 100);
    }
    else if (hour>=2201 && hour<=2400) {
        bg = "sunset12.jpg";
        text("11pm", 100, 100);
    }
    else if (hour>=2401 && hour<=0200) {
        bg = "sunset12.jpg";
        text("1am", 100, 100);
    }
    else if (hour>=0201 && hour<=0400) {
        bg = "sunset12.jpg";
        text("3am", 100, 100);
    }
    else if (hour>=0401 && hour<=0600) {
        bg = "sunset1.jpg";
        text("5am", 100, 100);
    }


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
    console.log(responseJSON)

}
