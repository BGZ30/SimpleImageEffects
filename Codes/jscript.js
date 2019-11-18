var inImg = new Image();
var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var canv = document.getElementById("can");
var ctx = canv.getContext("2d");
var deg = 0;

function upLoadImage() {
    if ( this.files && this.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
         //  var img = new Image();
           inImg.addEventListener("load", function() {
             ctx.drawImage(img1, 0, 0);
           });
           inImg.src = e.target.result;
           img1.src = e.target.result;
           img2.src = e.target.result;
		   img3.src = e.target.result;
        };       
        FR.readAsDataURL( this.files[0] );
    }
}

document.getElementById("img_upload").addEventListener("change", upLoadImage, false);



function grayscaleImg() {
  var imageData = ctx.getImageData(0, 0, img1.width, img1.height);
  var data = imageData.data;
  
  for (var i = 0; i < data.length; i+= 4) {
    var avg =(data[i]+data[i+1]+data[i+2])/3;
    data[i]=avg;
    data[i+1]=avg;
    data[i+2]=avg;
  }
ctx.putImageData(imageData, 0, 0);
}


function redHueFilter() {
  
    var imageData = ctx.getImageData(0, 0, img1.width, img1.height);
  var data = imageData.data;
  
  for (var i = 0; i < data.length; i+= 4) {
    var avg =(data[i]+data[i+1]+data[i+2])/3;
    
      if (avg < 128) {
      data[i] = 2 * avg;
      data[i+1] = 0;
      data[i+2] = 0;
    } else {
      data[i] = 255;
      data[i+1] = 2 * avg - 255;
      data[i+2] = 2 * avg - 255;
    }
    
  }
ctx.putImageData(imageData, 0, 0);
}
  

function blueHueFilter() {
  
var imageData = ctx.getImageData(0, 0, img1.width, img1.height);
  var data = imageData.data;
  
  for (var i = 0; i < data.length; i+= 4) {
    var avg =(data[i]+data[i+1]+data[i+2])/3;
    
      if (avg < 128) {
      data[i] = 0;
      data[i+1] = 0;
      data[i+2] = 2 * avg;
    } else {
      data[i] = 2 * avg - 255;
      data[i+1] = 2 * avg - 255;
      data[i+2] = 255;
    }
    
  }
ctx.putImageData(imageData, 0, 0);
}
  
function greenHueFilter() {
    
var imageData = ctx.getImageData(0, 0, img1.width, img1.height);
  var data = imageData.data;
  
  for (var i = 0; i < data.length; i+= 4) {
    var avg =(data[i]+data[i+1]+data[i+2])/3;
    
      if (avg < 128) {
      data[i] = 0;
      data[i+1] = 2 * avg;
      data[i+2] = 0;
    } else {
      data[i] = 2 * avg - 255;
      data[i+1] = 255;
      data[i+2] = 2 * avg - 255;
    }
    
  }
ctx.putImageData(imageData, 0, 0);
}


function invertColors() {
    
var imageData = ctx.getImageData(0, 0, canv.width, canv.height);
  var data = imageData.data;
  
  for (var i = 0; i < data.length; i+= 4) {

    data[i] = data[i] ^ 255;
    data[i+1] = data[i+1] ^ 255;
    data[i+2] = data[i+2] ^ 255;
  }
ctx.putImageData(imageData, 0, 0);
}


function resetImg() {
  //var imgCanv = document.getElementById("can");
  //var inImg=document.getElementById("img1");
  //newImg = new SimpleImage(inImg);
  //img = new SimpleImage(inImg);
//var canv = document.getElementById("can");
 //var ctx = canv.getContext("2d");

   canv.style.transform = 'rotate(0deg)';
  deg = 0;
	//var ctx = canv.getContext("2d");
  //newImg.drawTo(canv);
  ctx.drawImage(img3, 0, 0);
}

function boxBoarder(){
    var h=img1.height;
    var w=img1.width;
	
	var imageData = ctx.getImageData(0, 0, img1.width, img1.height);
	var data = imageData.data;
    
        for (var i = 0; i < data.length; i+= 4) {    
            //Top
			data[i]=0;
			data[i+1]=0;
			data[i+2]=0;
			
			if(i/4==w)
				break;
        }

		for (var i = 0; i < data.length; i+= 4*w) {    
            //Left
			data[i]=0;
			data[i+4*w+1]=0;
			data[i+4*w+2]=0;
			
			if(i/4==h*w-w)
				break;
        }  
		
 		for (var y = 0; y < h; y++) {    
            //Right
			//i=((imageWidth*y)+x)*4;
			
			var i=((w*y)+(w-1))*4;
			data[i]=0;
			data[i+1]=0;
			data[i+2]=0;
        } 		

		for (var x=0; x<w; x++) {    
            //Bottom
			
			// i=((imageWidth*y)+x)*4;
			//y=h-1
			
			var i=((w*(h-1))+x)*4;
			data[i]=0;
			data[i+1]=0;
			data[i+2]=0;
        } 
  
  //var boxCan = document.getElementById("can");
  	ctx.putImageData(imageData, 0, 0);
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


function convertBGR() {
  
  var imageData = ctx.getImageData(0, 0, canv.width, canv.height);
  var data = imageData.data;
  //var data = img1.data;
  
  for (var i = 0; i < data.length; i+= 4) {
  var temp = data[i];
    data[i] = data[i+2];
    data[i+2] = temp;
  }
ctx.putImageData(imageData, 0, 0);
  //ctx.drawImage(img1, 0,0); // draw the image
  }
  


function rotateRight(){
  deg = deg + 45;
  var angle = 'rotate'+'('+deg+'deg'+')';
  
  canv.style.transform = angle;
}

function rotateLeft(){
  deg = deg - 45;
  var angle = 'rotate'+'('+deg+'deg'+')';

  canv.style.transform = angle;
}

function mosaicImage(){}
function blurImage(){}
function getEdges(){}
function noisyImage(){}

function flipImage() {
  
  var scaleH =  -1 ;
  var scaleV  = 1; 
    
  //var x =  w * -1 ; 
  //var y =  h * 0; 
  var imageData = ctx.getImageData(0, 0, canv.width, canv.height);
  img1.data=imageData.data;
  // image  has been loaded
      var h = img2.height;
  var w = img2.width;

  var x =  w * -1 ; 
  var y =  h * 0; 
  ctx.scale(-1,1); // Set scale to flip the image
//ctx.clearRect(0, 0, canv.width, canv.height);
  ctx.drawImage(img1, x,y,w,h); // draw the image
    
}
