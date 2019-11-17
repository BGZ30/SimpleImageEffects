var inImg = document.getElementById("img1");
var newImg,img;

 var canv = document.getElementById("can");
 var ctx = canv.getContext("2d");
var deg = 0;
  

function upLoadImg() {
  //var imgCanv = document.getElementById("can");
  //var inImg=document.getElementById("img1");
  newImg = new SimpleImage(inImg);
  img = new SimpleImage(inImg);

  newImg.drawTo(canv);
}

function grayscaleImg() {
  for (var pixel of newImg.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }

  var grayCan = document.getElementById("can");
  newImg.drawTo(grayCan);
}

function redHueFilter() {
  for (var pixel of newImg.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
  var grayCan = document.getElementById("can");
  newImg.drawTo(grayCan);
}
  
function blueHueFilter() {
  for (var pixel of newImg.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 150) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2*avg);
    } else {
      pixel.setRed(2*avg-255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    }
  }
  var grayCan = document.getElementById("can");
  newImg.drawTo(grayCan);
}
  
function greenHueFilter() {
  for (var pixel of newImg.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 80) {
      pixel.setRed(0);
      pixel.setGreen(2*avg);
      pixel.setBlue(0);
    } else {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }
  }
  var grayCan = document.getElementById("can");
  newImg.drawTo(grayCan);
}

function resetImg() {
  //var imgCanv = document.getElementById("can");
  //var inImg=document.getElementById("img1");
  newImg = new SimpleImage(inImg);
  img = new SimpleImage(inImg);
//var canv = document.getElementById("can");
 //var ctx = canv.getContext("2d");

  canv.style.transform = 'rotate(0deg)';
  deg = 0;
  newImg.drawTo(canv);
}

function boxBoarder(){
    var h=img.getHeight();
    var w=img.getWidth();
    
    for(var t=0;t<5;t++){
        for(var yN=0; yN<h; yN++){
            
            //Left
            var pN=img.getPixel(t,yN);
            pN.setGreen(0);
            pN.setBlue(0);
            pN.setRed(0);
            img.setPixel(t,yN,pN);
            
            
            //Right
            pN=img.getPixel(w-t-1,yN);
            pN.setGreen(0);
            pN.setBlue(0);
            pN.setRed(0);
            img.setPixel(w-t-1,yN,pN);
        }
        
        for(var xN=0; xN<w; xN++){    
            //Top
            pN=img.getPixel(xN,t);
            pN.setGreen(0);
            pN.setBlue(0);
            pN.setRed(0);
            img.setPixel(xN,t,pN);
            
            //Down
            pN=img.getPixel(xN,h-t-1);
            pN.setGreen(0);
            pN.setBlue(0);
            pN.setRed(0);
            img.setPixel(xN,h-t-1,pN);
        }
        
    }
  
  //var boxCan = document.getElementById("can");
  img.drawTo(canv);
}


function windowBoarder(){
    var h=img.getHeight();
    var w=img.getWidth();
    
    for(var xN=0; xN<w; xN++){    
        pN=img.getPixel(xN,h/2);
        pN.setGreen(0);
        pN.setBlue(0);
        pN.setRed(0);
        img.setPixel(xN,h/2,pN);
    }
    
    for(var yN=0; yN<h; yN++){    
        pN=img.getPixel(w/2,yN);
        pN.setGreen(0);
        pN.setBlue(0);
        pN.setRed(0);
        img.setPixel(w/2,yN,pN);
    }
    
   //var winCan = document.getElementById("can");
  img.drawTo(canv);
}


function flipImageME() {
  for (var pixel of newImg.values()) {
    var tmp = pixel.getRed();
    pixel.setRed(pixel.getBlue());
    pixel.setBlue(tmp);
  }
  
  
  var grayCan = document.getElementById("can");
  newImg.drawTo(grayCan);
  grayCan.style.transform = "rotate(180deg)";


}


function rotateRight(){
  deg = deg + 45;
  var angle = 'rotate'+'('+deg+'deg'+')';
  //var canv = document.getElementById("can");
  //var ctx = canv.getContext("2d");
  
  canv.style.transform = angle;
  //canv.style.transform = 'rotate(45deg)'
  //ctx.rotate(deg * Math.PI / 180);
  //img.drawTo(canv);
}

function rotateLeft(){
  deg = deg - 45;
  var angle = 'rotate'+'('+deg+'deg'+')';

 // var canv = document.getElementById("can");
  //var ctx = canv.getContext("2d");
  //canv.style.transform = 'rotate(-45deg)';
  canv.style.transform = angle;
  //img.drawTo(canv);
}

function mosaicImage(){}
function blurImage(){}
function getEdges(){}
function noisyImage(){}

function flipImage() {


  
  var canvas = document.getElementById('can');
  
var ctx = canvas.getContext('2d');
  var scaleH =  -1 ;
  var scaleV  = 1; 
    var h = inImg.height;
  var w = inImg.width;
  var x =  w * -1 ; 
  var y =  h * 0; 

  
  ctx.save(); // Save the current state
  ctx.scale(scaleH, scaleV); // Set scale to flip the image
  ctx.drawImage(inImg, -14, 0, 50, 50); // draw the image
  
  ctx.restore(); // Restore the last saved state
  

    
}

/*

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("scream");

  var scaleH =  -1 ;
  var scaleV  = 1; 
  var x =  297 * -1 ; 
  var y =  240 * 0; 
  var h = img.height;
  var w = img.width;
  
  ctx.save(); // Save the current state
  ctx.scale(scaleH, scaleV); // Set scale to flip the image
  ctx.drawImage(img, x, y, w, h); // draw the image
  ctx.restore(); // Restore the last saved state

*/